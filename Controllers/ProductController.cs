using LocalFoodBusinessLayer.Models;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LocalFoodBusinessLayer.Controllers
{
    //[EnableCors(origins: "", headers: "", methods: "*")]
    [RoutePrefix("api/product")]
    public class ProductController : ApiController
    {
        [HttpGet]
        [Route("AllProducts")]
        public HttpResponseMessage GetAllProducts()
        {
            try
            {
                var context = new LocalFoodDBContext();
                return Request.CreateResponse(HttpStatusCode.OK, context.Products);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpPost]
        [Route("AddProduct")]
        public HttpResponseMessage AddProduct([FromBody] Product product)
        {
            try
            {
                var context = new LocalFoodDBContext();
                context.Products.Add(product);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, product);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpDelete]
        [Route("DeleteProduct")]
        public HttpResponseMessage DeleteItem([FromUri] int id)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchedItem = context.Products.FirstOrDefault(item => item.ProductID == id);
                context.Products.Remove(searchedItem);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpPatch]
        [Route("UpdateProduct")]
        public HttpResponseMessage UpdateItem([FromBody] Product product, [FromUri] int id)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchedItem = context.Products.FirstOrDefault(item => item.ProductID == id);
                searchedItem.CategoryType = product.CategoryType;
                searchedItem.Details = product.Details;
                searchedItem.Discount = product.Discount;
                searchedItem.Image = product.Image;
                searchedItem.Price = product.Price;
                searchedItem.ProductID = product.ProductID;
                searchedItem.ProductName = product.ProductName;
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, product);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }
    }
}
