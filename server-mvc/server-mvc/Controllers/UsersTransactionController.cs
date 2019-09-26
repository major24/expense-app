using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using server_mvc.Models;

namespace server_mvc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersTransactionController : ControllerBase
    {
        private IConfiguration _config;

        public UsersTransactionController(IConfiguration config)
        {
            _config = config;
        }

        // GET api/users/user1/transactions
        [HttpGet]
        [Route("/api/users/{userid}/transactions")]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactionsByUserId(string userid)
        {
            string url = string.Format(_config.GetSection("api").GetSection("getUserTransactions").Value, userid);

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                Transaction[] body = await response.Content.ReadAsAsync<Transaction[]>();
                return body;
            }
            else
            {
                return StatusCode((int)response.StatusCode, "Error fetching user transactions");
            }
        }

    }
}
