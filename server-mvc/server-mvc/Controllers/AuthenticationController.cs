using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
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
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _config;

        public AuthenticationController(IConfiguration config)
        {
            _config = config;
        }

        // POST: api/Authentication
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] UserCredentials userCredentials)
        {
            try
            {
                string resourceUri = _config.GetSection("api").GetSection("postAuthentication").Value;
                UtilHttpClient httpClient = new UtilHttpClient(_config);
                HttpResponseMessage response = await httpClient.Post(userCredentials, resourceUri);
                return StatusCode((int)response.StatusCode);
            }
            catch(Exception ex)
            {
                throw new Exception("Error posting UserCredentials. " + ex.Message);
            }

            /*
            string url = _config.GetSection("api").GetSection("postAuthentication").Value;
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage(HttpMethod.Post, url))
            using (var httpContent = CreateHttpContent(userCredentials))
            {
                request.Content = httpContent;
                using (var response = await client
                    .SendAsync(request, HttpCompletionOption.ResponseHeadersRead))
                {
                    return StatusCode((int)response.StatusCode);
                }
            }
            */
        }
    }
}
