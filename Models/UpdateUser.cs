using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LocalFoodBusinessLayer.Models
{
    public class UpdateUser
    {
        public string UserName { get; set; }
        public int Mobile { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public int Pincode { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}