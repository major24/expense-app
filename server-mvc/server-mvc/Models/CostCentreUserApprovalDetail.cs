using System;
using System.Collections.Generic;

namespace server_mvc.Models
{
    public class CostCentreUserApprovalDetail
    {
        public CostCentre CostCentre { get; set; }
        public CostCentreUserApproval[] Approvals { get; set; }
    }
}
