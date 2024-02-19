using FluentValidation;
using Timelogger.Application.Contracts.Persistence;

namespace Timelogger.Application.Features.ProjectFeature.Commands.CreateProject
{
    public class CreateProjectCommandValidator: AbstractValidator<CreateProjectCommand>
    {
        private readonly IProjectRepository _projectRepository;

        public CreateProjectCommandValidator(IProjectRepository leaveTypeRepository)
        {
            RuleFor(p => p.Name)
                .NotEmpty().WithMessage("{ProjectName} is required.")
                .NotNull()
                .MaximumLength(50).WithMessage("{ProjectName} must not exceed 50 characters.");


            RuleFor(q => q)
                .MustAsync(IsProjectNsameUnique)
                .WithMessage("Project with the same name already exists.");
            this._projectRepository = leaveTypeRepository;
        }

        private Task<bool> IsProjectNsameUnique(CreateProjectCommand command, CancellationToken token)
        {
            return _projectRepository.IsProjectNameUnique(command.Name);
        }
    }
}
