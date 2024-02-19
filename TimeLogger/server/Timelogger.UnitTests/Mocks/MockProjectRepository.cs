using Moq;
using Timelogger.Application.Contracts.Persistence;
using Timelogger.Perisistence.Repositories;
using TimeLogger.Domain.Models;

namespace Timelogger.UnitTests.Mocks
{
    public class MockProjectRepository
    {
        public static Mock<IProjectRepository> GetMockProjectRepository()
        {
            var projects = new List<Project>
            {
                new Project { Id = 1, Name = "Project 1", Description = "Description 1" },
                new Project { Id = 2, Name = "Project 2", Description = "Description 2" },
                new Project { Id = 3, Name = "Project 3", Description = "Description 3" }
            };

            var mockProjectInMemoryRepository = new Mock<IProjectRepository>();

            mockProjectInMemoryRepository.Setup(repo => repo.GetAllProjectsAsync()).ReturnsAsync(projects);

            mockProjectInMemoryRepository.Setup(repo => repo.CreateAsync(It.IsAny<Project>()))
                .Returns((Project project) =>
                {
                    projects.Add(project);
                    return Task.CompletedTask;
                });

            return mockProjectInMemoryRepository;

        }
    }
}

