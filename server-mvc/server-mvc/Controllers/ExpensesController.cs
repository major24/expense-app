﻿using System;
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
            try
            {
                GenericResponse genericResponse = await Save(expense);
                if (genericResponse.Status == 200 || genericResponse.Status == 201)
                {
                    string content = $"Expense has been created {genericResponse.Id}";

                    // If success send email as well..
                    SendEmail(expense.UserId, genericResponse.Id);

                    return StatusCode(genericResponse.Status, content);
                } else
                {
                    string content = $"Error: {genericResponse.Message}";
                    return StatusCode(genericResponse.Status, content);
                }
            }
            catch (Exception ex)
            {
                return "Error saving expense" + ex.Message.ToString();
            }

        }

        private async Task<GenericResponse> Save(Expense expense)
        {
            GenericResponse genericResponse = new GenericResponse();
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
                        genericResponse = await response.Content.ReadAsAsync<GenericResponse>();
                        return genericResponse;

                    }
                    else
                    {
                        var content = await response.Content.ReadAsStringAsync();
                        genericResponse.Message = content;
                        genericResponse.Status = (int)response.StatusCode;
                        return genericResponse;
                    }
                }
            }
        }

        private async void SendEmail(string userId, int expenseId)
        {
            // Fire and forget
            try
            {
                string resourceUri = _config.GetSection("api").GetSection("postSendEmail").Value;
                string url = $"{ _config.GetSection("api").GetSection("baseUrl").Value}{resourceUri}";
                RequestSendEmail reqSendEmail = new RequestSendEmail() { UserId = userId, ExpenseId = expenseId };

                using (var client = new HttpClient())
                using (var request = new HttpRequestMessage(HttpMethod.Post, url))
                using (var httpContent = new UtilHttpContent().CreateHttpContent(reqSendEmail))
                {
                    request.Content = httpContent;
                    using (var response = await client
                        .SendAsync(request, HttpCompletionOption.ResponseHeadersRead))
                    {
                        if (response.StatusCode == System.Net.HttpStatusCode.OK)
                        {
                            // var content = await response.Content.ReadAsStringAsync();
                            // return StatusCode((int)response.StatusCode, content);
                            // LOG Success
                        }
                    }
                }

            } catch (Exception ex)
            {
                string msg = ex.Message;
                // LOG ERROR
            }
        }



        /*
        // POST: api/Expenses
         [HttpPost]
        public async Task<ActionResult<string>> XXXXXXPost([FromBody] Expense expense)
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
                        // var content = await response.Content.ReadAsStringAsync();
                        GenericResponse genericResponse = await response.Content.ReadAsAsync<GenericResponse>();
                        string content = $"Expense has been created {genericResponse.Id}";
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
        */

    }
}
