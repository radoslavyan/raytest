using AutoMapper;
using MediatR;
using Timelogger.Application.Contracts.Logging;
using Timelogger.Application.Contracts.Persistence;

namespace Timelogger.Application.Features.ProjectFeature.Queries.GetProjectById
{
    public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, List<ProjectDto>>
    {
        private readonly IMapper _mapper;
        private readonly IProjectRepository _projectRepository;
        private readonly IAppLogger<GetProjectByIdQueryHandler> _logger;

        public GetProjectByIdQueryHandler(IMapper mapper, IProjectRepository projectRepository,
            IAppLogger<GetProjectByIdQueryHandler> logger)
        {
            this._mapper = mapper;
            this._projectRepository = projectRepository;
            this._logger = logger;
        }

        public async Task<List<ProjectDto>> Handle(GetProjectByIdQuery request, CancellationToken cancellationToken)
        {

            var project = await _projectRepository.GetByIdAsync(request.id);

            var projectData = _mapper.Map<List<ProjectDto>>(project);

            _logger.LogInformation("GetAllProjectsQuery was retrieved successfully ");

            return projectData;
        }

    }
}

