using Microsoft.AspNetCore.Mvc;

namespace FrontendUIWebApplication.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
