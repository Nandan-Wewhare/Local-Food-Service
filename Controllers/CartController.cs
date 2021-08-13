using LocalFoodBusinessLayer.Models;
using LocalFoodBusinessLayer.Utilities;
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
                cartItems.ForEach(item => item.Product = context.Products.FirstOrDefault(p => p.ProductID == item.ProductId));
                cartItems.ForEach(item => item.User = context.Users.FirstOrDefault(p => p.UserId == item.UserId));
                return Request.CreateResponse(HttpStatusCode.OK, cartItems);
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again");
            }
        }

        [HttpPost]
        [Route("AddToCart")]
        public HttpResponseMessage AddToCart([FromBody] Cart cartItem)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchedItem = context.CartItems.FirstOrDefault(item => item.ProductId == cartItem.ProductId);
                if (searchedItem == null)
                {
                    context.CartItems.Add(cartItem);
                    cartItem.Quantity = 1;
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, cartItem);
                }
                else
                {
                    searchedItem.Quantity += 1;
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, cartItem);
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again");
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
                Log.Error(ex.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again");
            }
        }

        [HttpPatch]
        [Route("UpdateQty")]
        public HttpResponseMessage UpdateQuantity([FromUri] int id, [FromUri] bool increase)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchedItem = context.CartItems.FirstOrDefault(item => item.Id == id);
                if (increase)
                    searchedItem.Quantity += 1;
                else
                    searchedItem.Quantity -= 1;
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, searchedItem);
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again");
            }
        }
    }
}
