using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Timelogger.Application.Features.ProjectFeature.Commands.CreateProject;
using Timelogger.Application.Features.ProjectFeature.Queries.GetAllProjects;
using Timelogger.Application.Features.ProjectFeature.Queries.GetProjectById;


namespace Timelogger.Api.Controllers
{
 
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        
        private readonly IMediator _mediator;

        public ProjectsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<List<ProjectsDto>> GetAllProjects()
        {
            
            var projects = await _mediator.Send(new GetAllProjectsQuery());
            return projects;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject(int id)
        {
            
            var project = await _mediator.Send(new GetProjectByIdQuery(id));

            if (project == null)
            {
                return NotFound();
            }
            return Ok(project);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProject(CreateProjectCommand project)
        {
            var response = await _mediator.Send(project);
            return CreatedAtAction(nameof(GetProject), new { id = project.Id }, project);
        }

        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateProject(int id, Project project)
        //{
        //    //if (id != project.Id)
        //    //{
        //    //    return BadRequest();
        //    //}

        //    //await _projectRepository.UpdateAsync(project);

        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProject(int id)
        //{
        //    //var project = await _projectRepository.GetByIdAsync(id);
        //    //if (project == null)
        //    //{
        //    //    return NotFound();
        //    //}

        //    //await _projectRepository.DeleteAsync(project);
        //    return NoContent();
        //}
    }
}
