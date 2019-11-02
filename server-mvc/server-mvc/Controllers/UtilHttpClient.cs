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
    public class UtilHttpClient
    {
        private IConfiguration _config;
        public UtilHttpClient(IConfiguration config)
        {
            _config = config;
        }

        public async Task<HttpResponseMessage> Post<T>(T value, string resourseUri)
        {
            try
            {
                string url = $"{ _config.GetSection("api").GetSection("baseUrl").Value}{resourseUri}";
                using (var client = new HttpClient())
                using (var request = new HttpRequestMessage(HttpMethod.Post, url))
                using (var httpContent = new UtilHttpContent().CreateHttpContent(value))
                {
                    request.Content = httpContent;
                    using (var response = await client.SendAsync(request, HttpCompletionOption.ResponseHeadersRead))
                    {
                        return response;
                    }
                }
            }
            catch(Exception ex)
            {
                throw new Exception("Error accessing POST Api: " + ex.Message);
            }
        }

        public async Task<HttpResponseMessage> Get(string resourseUri)
        {
            try
            {
                string url = $"{ _config.GetSection("api").GetSection("baseUrl").Value}{resourseUri}";
                using (var client = new HttpClient())
                {
                    using (var response = await client.GetAsync(url))
                    {
                        return response;
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error accessing GET Api: " + ex.Message);
            }
        }


    }
}
