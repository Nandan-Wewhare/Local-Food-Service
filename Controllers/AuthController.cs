using LocalFoodBusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LocalFoodBusinessLayer.Controllers
{
    [RoutePrefix("api/auth")]
    public class AuthController : ApiController
    {
        [HttpPost]
        [Route("Login")]
        public HttpResponseMessage Login([FromBody] LoginUser loginUser)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchResult = context.Users.FirstOrDefault(u => u.Email == loginUser.Email);
                if (searchResult == null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Email ID does not exist");
                else if (searchResult.Password != loginUser.Password)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Incorrect password");
                return Request.CreateResponse(HttpStatusCode.OK, "Login success");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again {ex.Message}");
            }
        }

        [HttpPost]
        [Route("AdminLogin")]
        public HttpResponseMessage AdminLogin([FromBody] AdminUser adminUser)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchResult = context.AdminUsers.FirstOrDefault(u => u.Username == adminUser.Username);
                if (searchResult == null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Email ID does not exist");
                else if (searchResult.Password != adminUser.Password)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Incorrect password");
                return Request.CreateResponse(HttpStatusCode.OK, "Login success");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again {ex.Message}");
            }
        }

        [HttpPost]
        [Route("Signup")]
        public HttpResponseMessage Signup([FromBody] User user)
        {
            try
            {
                var context = new LocalFoodDBContext();
                context.Users.Add(user);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, user);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again {ex.Message}");
            }
        }

        [HttpPatch]
        [Route("ForgotPassword")]
        public HttpResponseMessage ChangePassword([FromBody] LoginUser loginUser)
        {
            try
            {
                var context = new LocalFoodDBContext();
                var searchResult = context.Users.FirstOrDefault(u => u.Email == loginUser.Email);
                if (searchResult == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Email not registered");
                }
                else
                {
                    searchResult.Password = loginUser.Password;
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, searchResult);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, $"Please try again {ex.Message}");
            }
        }

    }
}
