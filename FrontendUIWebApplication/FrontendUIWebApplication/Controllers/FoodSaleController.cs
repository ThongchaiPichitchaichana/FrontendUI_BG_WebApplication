using Microsoft.AspNetCore.Mvc;

namespace FrontendUIWebApplication.Controllers
{
    public class FoodSaleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
