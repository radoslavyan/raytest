﻿using TimeLogger.Domain.Models.Common;

namespace Timelogger.Application.Contracts.Persistence
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<IReadOnlyList<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task CreateAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity); 
        Task DeleteByIdAsync(int id);
    }
}
