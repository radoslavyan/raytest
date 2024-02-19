using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Timelogger.Application.Features.ProjectFeature.Queries.GetAllProjects;

namespace Timelogger.Application.Features.ProjectFeature.Queries.GetProjectById
{
    public record GetProjectByIdQuery(int id) : IRequest<List<ProjectDto>>;
}
