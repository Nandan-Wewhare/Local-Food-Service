using LocalFoodBusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LocalFoodBusinessLayer.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        // NORMAL USER ACCESSIBLE ENDPOINTS
        [HttpGet]
        [Route("GetProfile")]
        public HttpResponseMessage Get([FromUri] int userId)
        {
            try
            {
                var context = new LocalFoodDBContext();
                User searchedUser = context.Users.FirstOrDefault(u => u.UserId == userId);
                return Request.CreateResponse(HttpStatusCode.OK, searchedUser);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpPatch]
        [Route("UpdateUser")]
        public HttpResponseMessage Update([FromUri] int userId, [FromBody] UpdateUser user)
        {
            try
            {
                var context = new LocalFoodDBContext();
                User searchedUser = context.Users.FirstOrDefault(u => u.UserId == userId);
                searchedUser.Address = user.Address;
                searchedUser.City = user.City;
                searchedUser.Email = user.Email;
                searchedUser.Gender = user.Gender;
                searchedUser.Mobile = user.Mobile;
                searchedUser.Password = user.Password;
                searchedUser.Pincode = user.Pincode;
                searchedUser.UserName = user.UserName;
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, searchedUser);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        // ADMIN USER ACCESSIBLE ENDPOINTS
        [HttpGet]
        [Route("AllUsers")]
        public HttpResponseMessage GetAllUsers()
        {
            try
            {
                var context = new LocalFoodDBContext();
                return Request.CreateResponse(HttpStatusCode.OK, context.Users);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }

        [HttpGet]
        [Route("AllOrders")]
        public HttpResponseMessage GetAllOrders()
        {
            try
            {
                var context = new LocalFoodDBContext();
                return Request.CreateResponse(HttpStatusCode.OK, context.Orders);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again{ex.Message}");
            }
        }
    }
}
