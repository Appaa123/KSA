using KSAApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KSAApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CowStockController : ControllerBase
    {

        public readonly IKSAService _ksaService;

        public CowStockController(IKSAService kSAService){
            _ksaService = kSAService;
        }

        [HttpGet]

        public Task<CowStock> GetCowStock(){
            return _ksaService.getRandomCowStock();
        }
    }
} 
