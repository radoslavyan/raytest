using TimeLogger.Domain.Models;

namespace Timelogger.Application.Contracts.Persistence
{
    
    public interface ITimeRegistrationRepository : IGenericRepository<TimeRegistration>
    {
        Task<IReadOnlyList<TimeRegistration>> GetAllTimeRegistrationsAsync();
        Task<IReadOnlyList<TimeRegistration>> GetTimeRegistrationWithDetailsAsync(int timeregId);
    }
}
