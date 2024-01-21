using System;
using System.ComponentModel.DataAnnotations;
using TimeLogger.Domain.Entities.Common;

namespace TimeLogger.Domain.Entities
{
    public class TimeLog : BaseEntity
    {
        

        [Required]
        public int ProjectId { get; set; }

        [Required]
        public DateTime StartTime { get; set; }

        [Required]
        public DateTime EndTime { get; set; }

        public string Description { get; set; } = string.Empty;
    }


}