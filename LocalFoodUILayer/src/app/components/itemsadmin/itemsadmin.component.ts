import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  message = "";
  products: Product[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.initialiseData();
  }

  initialiseData() {
    this.products = [];
    this.isLoading = true;
    var admin = new AdminService(this.http);
    admin.getAllProducts().subscribe((response) => {
      var responseProducts = JSON.parse(JSON.stringify((response)));
      responseProducts.forEach((item: any) => {
        this.products.push(new Product(item["ProductID"], item["ProductName"], item["Image"], item["Details"], item["Price"], item["Discount"], item["CategoryType"]));
      })
    }, (error) => { this.error = error["statusText"] })
    this.isLoading = false;
  }

  getForm(id: number) {
    var particularProduct = this.products[this.products.findIndex(p => p.id == id)];
    return {
      id: particularProduct.id,
      name: particularProduct.name,
      price: particularProduct.price,
      discount: particularProduct.discount,
      image: particularProduct.image,
      category: particularProduct.category,
      details: particularProduct.desc
    };
  }

  onUpdate(formData: any, id: number) {
    var admin = new AdminService(this.http);
    admin.updateProduct(id, formData).subscribe((res) => {
      this.message = "Success";
      this.ngOnInit();
    }, (error) => { this.error = error["statusText"] })
  }

  onDelete(id: number) {
    var admin = new AdminService(this.http);
    admin.deleteProduct(id).subscribe((res) => {
      this.message = "Success";
      this.ngOnInit();
    }, (error) => { this.error = error["statusText"] })
  }

  onSubmit(formData: any) {
    var admin = new AdminService(this.http);
    admin.addProduct(formData).subscribe((res) => { this.message = "success"; this.ngOnInit(); }, (error) => { console.log(error); this.error = error["error"]["Message"] })
  }
}
