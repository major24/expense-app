using System;

namespace server_mvc.Models
{
    public class CostCentreUserApproval
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public decimal Limit { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
