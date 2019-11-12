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
    public class CostCentresUsersApprovalsController : ControllerBase
    {
        private IConfiguration _config;

        public CostCentresUsersApprovalsController(IConfiguration config)
        {
            _config = config;
        }

        // GET api/costcentres/users/approvals
        [HttpGet]
        [Route("/api/costcentres/users/approvals")]
        public async Task<ActionResult<IEnumerable<CostCentreUserApprovalDetail>>> GetCostCentreApprovals()
        {
            try
            {
                string resourceUri = _config.GetSection("api").GetSection("getCostCentreApprovals").Value;
                string url = $"{ _config.GetSection("api").GetSection("baseUrl").Value}{resourceUri}";

                HttpClient client = new HttpClient();
                HttpResponseMessage response = await client.GetAsync(url);

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    CostCentreUserApprovalDetail[] body = await response.Content.ReadAsAsync<CostCentreUserApprovalDetail[]>();
                    return body;
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Error fetching cost centre approvals");
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error getting cost centre approvals data. " + ex.Message);
            }

        }




        }
    }
