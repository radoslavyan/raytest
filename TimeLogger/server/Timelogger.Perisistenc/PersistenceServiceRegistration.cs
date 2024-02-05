using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Timelogger.Application.Contracts.Persistence;
using Timelogger.Perisistence.DatabaseContext;
using Microsoft.EntityFrameworkCore;
using Timelogger.Perisistence.Repositories;
using TimeLogger.Domain.Models;

namespace Timelogger.Perisistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection AddPersistenceServices(this IServiceCollection services,
            IConfiguration configuration)
        {
          
            services.AddSingleton<IProjectRepository, ProjectInMemoryRepository>();
            services.AddSingleton<ITimeRegistrationRepository, TimeRegistrationInMemoryRepository>();

            var projectsList = new List<Project>(); 
            services.AddSingleton(projectsList);

            var timeRegistrationsList = new List<TimeRegistration>();
            services.AddSingleton(timeRegistrationsList);


            return services;
        }

    }
}
