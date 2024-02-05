using Microsoft.EntityFrameworkCore;
using Timelogger.Application.Contracts.Persistence;
using Timelogger.Perisistence.DatabaseContext;
using TimeLogger.Domain.Models.Common;

namespace Timelogger.Perisistence.Repositories
{
    public class InMemoryGenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly List<T> _items = new List<T>();

        public InMemoryGenericRepository(TimeloggerDbContext dbContext)
        {
            _items = dbContext.Set<T>().ToList();
        }

        public Task<IReadOnlyList<T>> GetAllAsync()
        {
            IReadOnlyList<T> readOnlyItems = _items.AsReadOnly();
            return Task.FromResult(readOnlyItems);
        }

        public Task<T> GetByIdAsync(int id)
        {
            var item = _items.FirstOrDefault(i => i.Id == id);
            return Task.FromResult(item);
        }

        public Task CreateAsync(T entity)
        {
            entity.Id = _items.Count + 1; // Simple ID generation, might need refinement
            _items.Add(entity);
            return Task.CompletedTask;
        }

        public Task UpdateAsync(T entity)
        {
            var index = _items.FindIndex(i => i.Id == entity.Id);
            if (index != -1)
            {
                _items[index] = entity;
            }
            return Task.CompletedTask;
        }

        public Task DeleteAsync(T entity)
        {
            _items.Remove(entity);
            return Task.CompletedTask;
        }

        public Task DeleteByIdAsync(int id)
        {
            var item = _items.FirstOrDefault(i => i.Id == id);
            if (item != null)
            {
                _items.Remove(item);
            }
            return Task.CompletedTask;
        }
    }

}
