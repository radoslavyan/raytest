using AutoMapper;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Timelogger.Application.Contracts.Logging;
using Timelogger.Application.Contracts.Persistence;
using Timelogger.Application.Features.ProjectFeature.Commands.CreateProject;
using Timelogger.Application.Features.ProjectFeature.Queries.GetAllProjects;
using Timelogger.Application.MappingProfiles;
using Timelogger.Perisistence.Repositories;
using Timelogger.UnitTests.Mocks;
using TimeLogger.Domain.Models;

namespace Timelogger.UnitTests
{
    public class ProjectRepositoryTests
    {
        private Mock<IAppLogger<GetAllProjectsQueryHandler>> _mockAppLogger;
        private IMapper _mapper;
        private readonly Mock<IProjectRepository> _mockProjectRepo;

        public ProjectRepositoryTests()
        {
            _mockProjectRepo = MockProjectRepository.GetMockProjectRepository();

            var mapperConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<ProjectProfile>();
            });

            _mapper = mapperConfig.CreateMapper();
            _mockAppLogger = new Mock<IAppLogger<GetAllProjectsQueryHandler>>();

        }


        [Fact]
        public async Task GetAllProjects_ReturnsAllProjects()
        {
            // Arrange

            var repository = new GetAllProjectsQueryHandler(_mapper, _mockProjectRepo.Object, _mockAppLogger.Object);

            // Act

            var result = await repository.Handle(new GetAllProjectsQuery(), CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(3, result.Count);
            Assert.Equal("Project 3", result[2].Name);
        }
    }
}

