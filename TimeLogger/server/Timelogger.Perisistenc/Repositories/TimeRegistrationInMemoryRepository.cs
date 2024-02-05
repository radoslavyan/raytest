using Timelogger.Application.Contracts.Persistence;
using TimeLogger.Domain.Models;

namespace Timelogger.Perisistence.Repositories
{
    public class TimeRegistrationInMemoryRepository : ITimeRegistrationRepository
    {
        private readonly IProjectRepository _projectRepository;

        private List<Project> _projects = new List<Project>();
        private List<TimeRegistration> _timeRegistrations = new List<TimeRegistration>();

        public TimeRegistrationInMemoryRepository(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
            _projects = _projectRepository.GetAllAsync().Result.ToList();
            _timeRegistrations = new List<TimeRegistration>()
            {
                new TimeRegistration()
                {
                    Id = 1,
                    ProjectId = 1,
                    StartTime = DateTime.Now,
                    EndTime = DateTime.Now.AddHours(4),
                    TimeSpentInHours = "4"
                },
                new TimeRegistration()

                {
                    Id = 2,
                    ProjectId = 2,
                    StartTime = DateTime.Now,
                    EndTime = DateTime.Now.AddHours(5),
                    TimeSpentInHours = "5"
                }

            };
        }


        public async Task<IReadOnlyList<TimeRegistration>> GetAllAsync()
        {
            return await Task.FromResult(_timeRegistrations.AsReadOnly());
        }

        public async Task<TimeRegistration> GetByIdAsync(int id)
        {
            return await Task.FromResult(_timeRegistrations.FirstOrDefault(tr => tr.Id == id));
        }

        public async Task CreateAsync(TimeRegistration entity)
        {
            entity.Id = _timeRegistrations.Count + 1;
            _timeRegistrations.Add(entity);
            await Task.CompletedTask;
        }

        public async Task UpdateAsync(TimeRegistration entity)
        {
            var index = _timeRegistrations.FindIndex(tr => tr.Id == entity.Id);
            if (index != -1)
            {
                _timeRegistrations[index] = entity;
                await Task.CompletedTask;
            }
        }

        public async Task DeleteAsync(TimeRegistration entity)
        {
            _timeRegistrations.Remove(entity);
            await Task.CompletedTask;
        }

        public async Task DeleteByIdAsync(int id)
        {
            var timeRegistration = await GetByIdAsync(id);
            if (timeRegistration != null)
            {
                _timeRegistrations.Remove(timeRegistration);
                await Task.CompletedTask;
            }
        }

        public async Task<IReadOnlyList<TimeRegistration>> GetAllTimeRegistrationsAsync()
        {
            return await GetAllAsync();
        }

        public async Task<IReadOnlyList<TimeRegistration>> GetTimeRegistrationWithDetailsAsync(int timeregId)
        {
            return await Task.FromResult(_timeRegistrations.Where(tr => tr.Id == timeregId).ToList().AsReadOnly());
        }
    }

}
