using MediatR;

namespace Timelogger.Application.Features.ProjectFeature.Commands.CreateProject
{
    public class CreateProjectCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public DateTime Deadline { get; set; }

        public bool isCompletedStatus { get; set; }

    }
}
