import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenavadmin',
  templateUrl: './sidenavadmin.component.html',
  styleUrls: ['./sidenavadmin.component.css']
})
export class SidenavadminComponent implements OnInit {

  constructor(private http: HttpClient, private Router: Router) {
    this.auth = new AuthService(http)
  }
  auth: AuthService
  ngOnInit(): void {
  }

  logout() {
    this.auth.setLogout()
    this.Router.navigateByUrl('/AdminLogin')
  }

}
