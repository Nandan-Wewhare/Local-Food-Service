using LocalFoodBusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LocalFoodBusinessLayer.Controllers
{
    [RoutePrefix("api/cart")]
    public class CartController : ApiController
    {
        [HttpGet]
        [Route("MyCart")]
        public HttpResponseMessage GetCart([FromUri] int userId)
        {
            List<Cart> cartItems = new List<Cart>();
            try
            {
                var context = new LocalFoodDBContext();
                cartItems = context.CartItems.Where(item => item.UserId == userId).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, cartItems);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpPost]
        [Route("AddToCart")]
        public HttpResponseMessage AddToCart([FromBody] Cart cartItem)
        {
            try
            {
                var context = new LocalFoodDBContext();
                context.CartItems.Add(cartItem);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, cartItem);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpDelete]
        [Route("DeleteItem")]
        public HttpResponseMessage DeleteItem([FromUri] int id)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchedItem = context.CartItems.FirstOrDefault(item => item.Id == id);
                context.CartItems.Remove(searchedItem);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }
    }
}
