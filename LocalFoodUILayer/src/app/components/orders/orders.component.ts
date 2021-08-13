import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { Order } from 'src/app/types/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.auth = new AuthService(this.http)
  }
  error = "";
  message = "";
  orders: Order[] = [];

  ngOnInit(): void {
    this.initialiseData();
  }
  auth: AuthService

  initialiseData() {
    var admin = new AdminService(this.http);
    admin.getAllOrders().subscribe((response) => {
      var responseOrders = JSON.parse(JSON.stringify((response)));
      responseOrders.forEach((item: any) => {
        this.orders.push(new Order(item["OrderID"], item["UserID"], item["Price"], item["User"]["Address"], item["User"]["Mobile"], item["User"]["Pincode"]));
      })
    }, (error) => { this.error = error["statusText"] })
  }

}
