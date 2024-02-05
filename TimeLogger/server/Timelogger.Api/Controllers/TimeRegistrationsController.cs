using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Timelogger.Application.Contracts.Persistence;
using TimeLogger.Domain.Models;

namespace Timelogger.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeRegistrationsController : ControllerBase
    {

        private readonly ITimeRegistrationRepository _timeRegistrationRepository;

        public TimeRegistrationsController(ITimeRegistrationRepository timeRegistrationRepository)
        {
            _timeRegistrationRepository = timeRegistrationRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTimeRegistrations()
        {
            var timeRegistrations = await _timeRegistrationRepository.GetAllTimeRegistrationsAsync();
            return Ok(timeRegistrations);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTimeRegistration(int id)
        {
            var timeRegistration = await _timeRegistrationRepository.GetTimeRegistrationWithDetailsAsync(id);
            if (timeRegistration == null || timeRegistration.Count == 0)
            {
                return NotFound();
            }
            return Ok(timeRegistration);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTimeRegistration(TimeRegistration timeRegistration)
        {
            await _timeRegistrationRepository.CreateAsync(timeRegistration);
            return CreatedAtAction(nameof(GetTimeRegistration), new { id = timeRegistration.Id }, timeRegistration);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTimeRegistration(int id, TimeRegistration timeRegistration)
        {
            if (id != timeRegistration.Id)
            {
                return BadRequest();
            }

            await _timeRegistrationRepository.UpdateAsync(timeRegistration);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTimeRegistration(int id)
        {
            var timeRegistration = await _timeRegistrationRepository.GetByIdAsync(id);
            if (timeRegistration == null)
            {
                return NotFound();
            }

            await _timeRegistrationRepository.DeleteAsync(timeRegistration);
            return NoContent();
        }
    }
}

