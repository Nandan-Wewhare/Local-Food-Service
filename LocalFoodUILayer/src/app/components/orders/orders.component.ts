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
      var responseProducts = JSON.parse(JSON.stringify((response)));
      console.log(responseProducts);
      // responseProducts.forEach((item: any) => {
      //   this.orders.push(new Order(item["ProductID"], item["ProductName"], item["Image"], item["Details"], item["Price"], item["Discount"], item["CategoryType"]));
      // })
    }, (error) => { this.error = error["statusText"] })
  }

}
