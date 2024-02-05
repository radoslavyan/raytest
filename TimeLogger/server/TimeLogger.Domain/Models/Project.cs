using System.ComponentModel.DataAnnotations;
using TimeLogger.Domain.Models.Common;

namespace TimeLogger.Domain.Models
{
    public class Project : BaseEntity
    {
        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(50)]
        public string Name { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }
        public string Description { get; set; } = string.Empty;
        public bool IsCompletedStatus { get; set; }
    }

}
