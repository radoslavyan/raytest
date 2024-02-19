using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Timelogger.Application.Contracts.Logging;
using Timelogger.Infrastructure.Logging;

namespace Timelogger.Infrastructure
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services,
            IConfiguration configuration)
        {

            services.AddSingleton(typeof(IAppLogger<>), typeof(LoggerAdapter<>));

            return services;
        }


    }
}
