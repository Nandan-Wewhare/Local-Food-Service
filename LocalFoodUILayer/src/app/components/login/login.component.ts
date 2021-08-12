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
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  onSubmit(form: NgForm) {
    var auth = new AuthService(this.http);
    auth.loginUser(form.value).subscribe((res) => { auth.authenticate("true", JSON.parse(JSON.stringify(res))["UserId"], false); this.router.navigateByUrl("home") }, (error) => { this.error = error["error"]["Message"] ?? error["statusText"] })
  }
}