using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timelogger.Application.Features.ProjectFeature.Queries.GetAllProjects
{
    public record GetAllProjectsQuery : IRequest<List<ProjectsDto>>;
}
