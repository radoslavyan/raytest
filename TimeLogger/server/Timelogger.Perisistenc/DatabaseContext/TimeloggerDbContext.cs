using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using TimeLogger.Domain.Models;
using TimeLogger.Domain.Models.Common;

namespace Timelogger.Perisistence.DatabaseContext
{
    public class TimeloggerDbContext : DbContext
    {
        public TimeloggerDbContext(DbContextOptions<TimeloggerDbContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }

        public DbSet<TimeRegistration> TimeRegistrations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //we can use this to apply all the configurations in the assembly
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(TimeloggerDbContext).Assembly);

            base.OnModelCreating(modelBuilder);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {

            foreach (var entry in base.ChangeTracker.Entries<BaseEntity>().Where(
                e => e.State == EntityState.Added || e.State == EntityState.Modified))
            {
                entry.Entity.DateModified = DateTime.Now;

                if (entry.State == EntityState.Added)
                {
                    entry.Entity.DateCreated = DateTime.Now;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
