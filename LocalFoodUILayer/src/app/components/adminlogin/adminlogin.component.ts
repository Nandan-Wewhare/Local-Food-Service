import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  error: any = "";
  constructor(private http: HttpClient, private router: Router) {
    this.auth = new AuthService(this.http);
  }
  auth: AuthService;
  ngOnInit(): void {
    localStorage.clear();
  }
  onSubmit(form: NgForm) {
    this.auth.adminLogin(form.value).subscribe((res) => { this.auth.authenticate("true", JSON.parse(JSON.stringify(res))["UserId"], true); this.router.navigateByUrl("adminHome") }, (error) => { console.log(error); this.error = error["error"]["Message"] ?? error["statusText"] })
  }
}
