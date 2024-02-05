using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using Timelogger.Application;
using TimeLogger.Domain.Models;
using Timelogger.Perisistence.DatabaseContext;
using System;
using Timelogger.Perisistence;
using System.Collections.Generic;
using System.Linq;

namespace Timelogger.Api
{
    public class Startup
    {
        private readonly IWebHostEnvironment _environment;
        public IConfigurationRoot Configuration { get; }

        public Startup(IWebHostEnvironment env)
        {
            _environment = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            
            services.AddApplicationServices();
            services.AddPersistenceServices(Configuration);

            services.AddDbContext<TimeloggerDbContext>(opt => opt.UseInMemoryDatabase("e-conomic interview"));
            
            services.AddAutoMapper(typeof(Startup));
            services.AddControllers();

            services.AddLogging(builder =>
            {
                builder.AddConsole();
                builder.AddDebug();
            });

            services.AddMvc(options => options.EnableEndpointRouting = false);

            if (_environment.IsDevelopment())
            {
                services.AddCors(options =>
                {
                    var frontendURL = Configuration.GetValue<string>("frontend_url");

                    options.AddDefaultPolicy(builder =>
                    {
                        builder.WithOrigins(frontendURL)
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                    });
                });
            }
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors();
            }

            app.UseMvc();

            var serviceScopeFactory = app.ApplicationServices.GetService<IServiceScopeFactory>();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

    }
}