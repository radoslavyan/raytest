using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Timelogger.Application.Contracts.Persistence;
using TimeLogger.Domain.Models;

namespace Timelogger.Perisistence.Repositories
{
    public class ProjectInMemoryRepository : IProjectRepository
    {
        private readonly List<Project> _projects = new List<Project>();
            
        public ProjectInMemoryRepository() 
        {
            _projects.Add(new Project { Id = 1, Name = "Project 1", Description = "Project 1 Description", 
                Deadline = DateTime.Parse("2024-02-16"), DateCreated = DateTime.Now, IsCompletedStatus = false });
            _projects.Add(new Project { Id = 2, Name = "Project 2", Description = "Project 2 Description", 
                Deadline = DateTime.Parse("2024-02-17"), DateCreated = DateTime.Now, IsCompletedStatus = false });
            _projects.Add(new Project { Id = 3, Name = "Project 3", Description = "Project 3 Description", 
                Deadline = DateTime.Parse("2024-02-18"), DateCreated = DateTime.Now, IsCompletedStatus = false });
        }


        public async Task<IReadOnlyList<Project>> GetAllAsync()
        {
            return await Task.FromResult(_projects.AsReadOnly());
        }

        public async Task<Project> GetByIdAsync(int id)
        {
            return await Task.FromResult(_projects.FirstOrDefault(p => p.Id == id));
        }

        public async Task CreateAsync(Project entity)
        {
            entity.Id = _projects.Count + 1;
            _projects.Add(entity);
            await Task.CompletedTask;
        }

        public async Task UpdateAsync(Project entity)
        {
            var index = _projects.FindIndex(p => p.Id == entity.Id);
            if (index != -1)
            {
                _projects[index] = entity;
                await Task.CompletedTask;
            }
        }

        public async Task DeleteAsync(Project entity)
        {
            _projects.Remove(entity);
            await Task.CompletedTask;
        }

        public async Task DeleteByIdAsync(int id)
        {
            var project = await GetByIdAsync(id);
            if (project != null)
            {
                _projects.Remove(project);
                await Task.CompletedTask;
            }
        }

        public async Task<bool> IsProjectNameUnique(string name)
        {
            var exists = _projects.Any(p => p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
            return await Task.FromResult(!exists);
        }

        public async Task<bool> CheckIfProjectExist(int projectId, string name)
        {
            var exists = _projects.Any(p => p.Id != projectId && p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
            return await Task.FromResult(exists);
        }

        public async Task<IReadOnlyList<Project>> GetAllProjectsAsync()
        {
            return await GetAllAsync();
        }

        public async Task<IReadOnlyList<Project>> GetProjectWithDetailsAsync(int projectId)
        {
            return await Task.FromResult(_projects.Where(p => p.Id == projectId).ToList().AsReadOnly());
        }

    }

}
