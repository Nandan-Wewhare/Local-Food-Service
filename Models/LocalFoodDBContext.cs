using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LocalFoodBusinessLayer.Models
{
    public class LocalFoodDBContext : DbContext
    {
        public LocalFoodDBContext() : base("name = LocalFoodServiceConnectionString") { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<AdminUser> AdminUsers { get; set; }
        public DbSet<Cart> CartItems { get; set; }
    }
}