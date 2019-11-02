using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server_mvc.Models;

namespace server_mvc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private IConfiguration _config;

        public ExpensesController(IConfiguration config)
        {
            _config = config;
        }

        // POST: api/Expenses
        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] Expense expense)
        {
            // string url = _config.GetSection("api").GetSection("postExpenses").Value;
            string resourceUri = _config.GetSection("api").GetSection("postExpenses").Value;
            string url = $"{ _config.GetSection("api").GetSection("baseUrl").Value}{resourceUri}";
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage(HttpMethod.Post, url))
            using (var httpContent = new UtilHttpContent().CreateHttpContent(expense))
            {
                request.Content = httpContent;
                using (var response = await client
                    .SendAsync(request, HttpCompletionOption.ResponseHeadersRead))
                {
                    if (response.StatusCode == System.Net.HttpStatusCode.OK || response.StatusCode == System.Net.HttpStatusCode.Created)
                    {
                        var content = await response.Content.ReadAsStringAsync();
                        return StatusCode((int)response.StatusCode, content);
                    }
                    else
                    {
                        var content = await response.Content.ReadAsStringAsync();
                        return StatusCode((int)response.StatusCode, content);
                    }
                }
            }
        }


    }
}
