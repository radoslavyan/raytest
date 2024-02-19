using AutoMapper;
using MediatR;
using Timelogger.Application.Contracts.Logging;
using Timelogger.Application.Contracts.Persistence;

namespace Timelogger.Application.Features.ProjectFeature.Queries.GetAllProjects
{
    public class GetAllProjectsQueryHandler : IRequestHandler<GetAllProjectsQuery, List<ProjectsDto>>
    {
        private readonly IMapper _mapper;
        private readonly IProjectRepository _projectRepository;
        private readonly IAppLogger<GetAllProjectsQueryHandler> _logger;

        public GetAllProjectsQueryHandler(IMapper mapper, IProjectRepository projectRepository,
            IAppLogger<GetAllProjectsQueryHandler> logger)
        {
            this._mapper = mapper;
            this._projectRepository = projectRepository;
            this._logger = logger;
        }

        public async Task<List<ProjectsDto>> Handle(GetAllProjectsQuery request, CancellationToken cancellationToken)
        { 
            var projects = await _projectRepository.GetAllProjectsAsync();

            //convert data objects to DTO objects,this is possible because we made a mapping profiles for project

            var allProjects = _mapper.Map<List<ProjectsDto>>(projects);
         
            _logger.LogInformation("GetAllProjectsQuery was retrieved successfully ");

            return allProjects;
        }

    }
}
