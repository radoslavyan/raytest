using TimeLogger.Domain.Models;

namespace Timelogger.Application.Contracts.Persistence
{
    public interface IProjectRepository : IGenericRepository<Project>
    {
        Task<bool> IsProjectNameUnique(string name);
        Task<bool> CheckIfProjectExist(int projectId, string name);
        Task<IReadOnlyList<Project>> GetAllProjectsAsync();
    }
}
