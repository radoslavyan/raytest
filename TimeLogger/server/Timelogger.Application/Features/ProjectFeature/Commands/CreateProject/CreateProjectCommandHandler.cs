using AutoMapper;
using MediatR;
using Timelogger.Application.Contracts.Persistence;
using Timelogger.Application.Exceptions;
using TimeLogger.Domain.Models;

namespace Timelogger.Application.Features.ProjectFeature.Commands.CreateProject
{
    public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, int>
    {
        private readonly IMapper _mapper;
        private readonly IProjectRepository _projectRepository;

        public CreateProjectCommandHandler(IMapper mapper, IProjectRepository projectRepository)
        {
            _mapper = mapper;
            _projectRepository = projectRepository;
        }
        public async Task<int> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateProjectCommandValidator(_projectRepository);
            var validationResult = await validator.ValidateAsync(request);

            if (validationResult.Errors.Any())
            {
                throw new BadRequestException("Error CreateHandle Project: ", validationResult);
            }

            var projectToCreate = _mapper.Map<Project>(request);

            await _projectRepository.CreateAsync(projectToCreate);

            return projectToCreate.Id;
        }
    }
}
