using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_mvc.Models
{
    public class GenericResponse
    {
        public int Id { get; set; }
        public int Status { get; set; }
        public string Message { get; set; }
    }
}
