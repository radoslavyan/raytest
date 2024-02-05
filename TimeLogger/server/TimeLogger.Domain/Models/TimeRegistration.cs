using System.ComponentModel.DataAnnotations.Schema;
using TimeLogger.Domain.Models.Common;

namespace TimeLogger.Domain.Models
{
    public class TimeRegistration : BaseEntity
    {
        // [ForeignKey("ProjectId")]
        public int ProjectId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string TimeSpentInHours { get; set; }  = string.Empty;
    }
}
