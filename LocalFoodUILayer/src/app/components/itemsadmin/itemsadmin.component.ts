import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-itemsadmin',
  templateUrl: './itemsadmin.component.html',
  styleUrls: ['./itemsadmin.component.css']
})
export class ItemsadminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error = "";
  products: Product[] = [];
  ngOnInit(): void {
    var admin = new AdminService(this.http);
    admin.getAllProducts().subscribe((response) => {
      console.log(response)
      var responseProducts = JSON.parse(JSON.stringify((response)));
      responseProducts.forEach((item: any) => {
        this.products.push(new Product(item["ProductId"], item["ProductName"], item["Image"], item["Details"], item["Price"], item["Discount"], item["CategoryType"]));
      })
    }, (error) => { this.error = error })
  }

}
