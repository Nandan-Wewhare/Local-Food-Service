import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error = "";
  users: User[] = [];

  ngOnInit(): void {
    this.initialiseData();
  }

  initialiseData() {
    var admin = new AdminService(this.http);
    admin.getAllUsers().subscribe((response) => {
      var responseUser = JSON.parse(JSON.stringify((response)));
      responseUser.forEach((item: any) => {
        this.users.push(new User(item["Address"], item["City"], item["Email"], item["Gender"], item["Mobile"], item["Password"], item["Pincode"], item["UserId"], item["UserName"]));
      })
    }, (error) => { this.error = error["statusText"] })
  }

}
