using Microsoft.AspNetCore.Mvc;

namespace FrontendUIWebApplication.Controllers
{
    public class OrderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
