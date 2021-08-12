import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any = "";
  isLoading = false;
  constructor(private http: HttpClient, private router: Router) {
    this.auth = new AuthService(http)
  }
  auth: AuthService
  ngOnInit(): void {
    localStorage.clear();
  }
  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.auth.loginUser(form.value).subscribe((res) => { this.auth.authenticate("true", JSON.parse(JSON.stringify(res))["UserId"], false); this.router.navigateByUrl("home") }, (error) => { this.error = error["error"]["Message"] ?? error["statusText"] })
    this.isLoading = false;
  }

  changePassword(form: NgForm) {
    this.auth.forgotPassword(form.value).subscribe((res) => { window.alert("Password updated") }, (error) => { window.alert(error["error"]["Message"] ?? error["statusText"]) })
  }
}