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
    public class UsersController : ControllerBase
    {
        private IConfiguration _config;

        public UsersController(IConfiguration config)
        {
            _config = config;
        }

        // GET: api/Users/5
        [HttpGet("{userid}", Name = "GetByUserId")]
        public async Task<ActionResult<User>> GetByuserId(string userid)
        {
            string url = string.Format(_config.GetSection("api").GetSection("getUserById").Value, userid);

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                User body = await response.Content.ReadAsAsync<User>();
                return body;
            } else
            {
                return StatusCode((int)response.StatusCode, "Error fetching user");
            }
        }


    }
}
