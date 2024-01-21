using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TimeLogger.Domain.Entities.Common;

namespace TimeLogger.Domain.Entities
{
    public class Project : BaseEntity
    {
        

        [Required]
        [StringLength(50)]
        public string Name { get; set; } = string.Empty;

        [Required]
        public DateTime Deadline { get; set; }
        // More project details...
    }

}
