using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_mvc.Models
{
    public class RequestSendEmail
    {
        public string UserId { get; set; }
        public int ExpenseId { get; set; }
    }
}
