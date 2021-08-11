using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LocalFoodBusinessLayer.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [StringLength(50)]
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Mobile { get; set; }

        [Required]
        [StringLength(10)]
        public string Gender { get; set; }

        [StringLength(50)]
        [Required]
        public string Address { get; set; }

        [StringLength(50)]
        [Required]
        public string City { get; set; }

        [Required]
        public int Pincode { get; set; }

        [StringLength(50)]
        [Required]
        public string Email { get; set; }

        [StringLength(50)]
        [Required]
        public string Password { get; set; }

    }
}