using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server_mvc.Models;

namespace server_mvc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private IConfiguration _config;
        public TransactionsController(IConfiguration config)
        {
            _config = config;
        }

        // GET: api/Transactions
        [HttpGet]
        public async Task<Transaction[]> Get()
        {
            string url = _config.GetSection("api").GetSection("getTransactions").Value;

            HttpClient client = new HttpClient();
            HttpResponseMessage resp = await client.GetAsync(url);

            var sc = resp.EnsureSuccessStatusCode();
            Transaction[] body = await resp.Content.ReadAsAsync<Transaction[]>();

            return body;
        }
    }
}
