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
      var responseProducts = JSON.parse(JSON.stringify((response)));
      responseProducts.forEach((item: any) => {
        this.products.push(new Product(item["ProductID"], item["ProductName"], item["Image"], item["Details"], item["Price"], item["Discount"], item["CategoryType"]));
      })
    }, (error) => { this.error = error["statusText"] })
  }

  getForm(id: number) {
    return {
      id: this.products[this.products.findIndex(p => p.id == id)].id,
      name: this.products[this.products.findIndex(p => p.id == id)].name,
      price: this.products[this.products.findIndex(p => p.id == id)].price,
      discount: this.products[this.products.findIndex(p => p.id == id)].discount,
      image: this.products[this.products.findIndex(p => p.id == id)].image,
      category: this.products[this.products.findIndex(p => p.id == id)].category,
      details: this.products[this.products.findIndex(p => p.id == id)].desc
    };
  }

  onSubmit(formData: any, id: number) {
    // console.log(formData);
    var admin = new AdminService(this.http);
    admin.updateProduct(id, formData).subscribe((res) => {
      console.log(res);
    }, (error) => { this.error = error["statusText"] })
  }

}
