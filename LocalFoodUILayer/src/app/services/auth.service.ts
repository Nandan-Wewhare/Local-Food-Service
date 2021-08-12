import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl;
  currentUser() {
    return parseInt(localStorage.getItem("userId") || "");
  }

  isAuthenticated() {
    var authValues = [];
    authValues.push(localStorage.getItem("isAuthenticated") ?? "false");
    authValues.push(localStorage.getItem("adminlogin"))
    return authValues;
  }

  authenticate(value: string, userId: string, admin: boolean) {
    localStorage.setItem("isAuthenticated", value);
    localStorage.setItem("userId", userId);
    localStorage.setItem("adminlogin", admin ? "true" : "false")
  }

  setLogout() {
    localStorage.setItem("isAuthenticated", "false")
    localStorage.setItem("adminlogin", "false")
  }

  loginUser(loginbody: any) {
    return this.http.post(this.baseUrl + "/auth/login", loginbody)
  }

  signup(signupbody: any) {
    return this.http.post(this.baseUrl + "/auth/signup", signupbody);
  }

  adminLogin(loginBody: any) {
    return this.http.post(this.baseUrl + "/auth/adminlogin", loginBody);
  }

  forgotPassword(forgotPswdBody: any) {
    return this.http.patch(this.baseUrl + "/auth/forgotpassword", forgotPswdBody, { observe: 'response' })
  }

  getMyProfile(userId: number) {
    return this.http.get(this.baseUrl + `/user/getprofile?userid=${userId}`)
  }

  updateProfile(profileBody: any) {
    console.log(profileBody);
    return this.http.patch(this.baseUrl + `/user/updateuser?userid=${this.currentUser()}`, profileBody)
  }
}
