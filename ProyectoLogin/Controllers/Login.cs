using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ProyectoLogin.Models;

namespace ProyectoLogin.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            // Validate the model
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Authenticate the user
            // ...

            return Ok();
        }
    }
}
namespace ProyectoLogin.Controllers
{
    public class Login
    {
    }
}
