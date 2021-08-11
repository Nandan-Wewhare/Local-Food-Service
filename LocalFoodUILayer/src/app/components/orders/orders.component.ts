import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Order } from 'src/app/types/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error = "";
  message = "";
  orders: Order[] = [];

  ngOnInit(): void {
    this.initialiseData();
  }

  initialiseData() {
    var admin = new AdminService(this.http);
    admin.getAllOrders().subscribe((response) => {
      var responseOrders = JSON.parse(JSON.stringify((response)));
      responseOrders.forEach((item: any) => {
        this.orders.push(new Order(item["Email"], item["Mobile"], item["ProductName"], item["Quantity"], item["UserId"], item["ProductID"]));
      })
    }, (error) => { this.error = error["statusText"] })
  }

}
