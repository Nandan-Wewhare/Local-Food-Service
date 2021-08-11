import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.service = new AdminService(http)
  }
  products: Product[] = [];
  service: AdminService
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res) => {
      var responseProducts = JSON.parse(JSON.stringify((res)));
      responseProducts.forEach((item: any) => {
        this.products.push(new Product(item["ProductID"], item["ProductName"], item["Image"], item["Details"], item["Price"], item["Discount"], item["CategoryType"]));
      })
    }, (error) => { console.log(error) })
  }

}
