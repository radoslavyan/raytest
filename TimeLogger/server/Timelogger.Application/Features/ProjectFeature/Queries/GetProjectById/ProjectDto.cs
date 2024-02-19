using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timelogger.Application.Features.ProjectFeature.Queries.GetProjectById
{
    public class ProjectDto
    {     
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }

        public bool isCompletedStatus { get; set; }
    }
}
