import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: any = "";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    var regexp = new RegExp("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/")
    if (regexp.test(form.value["password"])) {
      var auth = new AuthService(this.http);
      auth.signup(form.value).subscribe((res) => { auth.authenticate("true", JSON.parse(JSON.stringify(res))["UserId"], false); this.router.navigateByUrl("home") }, (error) => { this.error = error["statusText"] })
      this.router.navigateByUrl("home")
    }
    else {
      this.error = "Please abide by password rules"
    }
  }
}
