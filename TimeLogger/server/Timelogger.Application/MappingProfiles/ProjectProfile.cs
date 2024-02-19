using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Timelogger.Application.Features.ProjectFeature.Commands.CreateProject;
using Timelogger.Application.Features.ProjectFeature.Queries.GetAllProjects;
using Timelogger.Application.Features.ProjectFeature.Queries.GetProjectById;
using TimeLogger.Domain.Models;

namespace Timelogger.Application.MappingProfiles
{
    public class ProjectProfile : Profile
    {
        //mapping configurations between Type A and Type B

        public ProjectProfile()
        {
            CreateMap<Project, ProjectDto>().ReverseMap();
            CreateMap<Project, ProjectsDto>().ReverseMap();
            CreateMap<GetProjectByIdQuery, Project>();
            CreateMap<GetAllProjectsQuery, Project>();
            CreateMap<Project, ProjectDto>();
            CreateMap<Project, ProjectsDto>();

            CreateMap<CreateProjectCommand, Project>();
            //CreateMap<UpdateProjectCommand, Project>();
        }

    }
}
