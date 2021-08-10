using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LocalFoodBusinessLayer.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }

        [Required]
        [MaxLength(50)]
        public string ProductName { get; set; }

        [Required]
        [MaxLength(50)]
        public string CategoryType { get; set; }

        [MaxLength(100)]
        public string Details { get; set; }

        [Required]
        public float Price { get; set; }
        public float Discount { get; set; }

        [Required]
        public string Image { get; set; }
    }
}