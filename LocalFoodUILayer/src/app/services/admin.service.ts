import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl;

  // Product Controls
  getAllProducts() {
    return this.http.get(this.baseUrl + "/product/AllProducts")
  }

  updateProduct(productId: number, formBody: any) {
    var updateBody = {
      "ProductID": productId,
      "ProductName": formBody["name"],
      "CategoryType": formBody["category"],
      "Details": formBody["details"],
      "Price": formBody["price"],
      "Discount": formBody["discount"],
      "Image": formBody["image"]
    };
    return this.http.patch(this.baseUrl + `/product/UpdateProduct?id=${productId}`, updateBody)
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.baseUrl + `/product/DeleteProduct?id=${productId}`)
  }

  addProduct(formBody: any) {
    var addBody = {
      "ProductName": formBody["name"],
      "CategoryType": formBody["category"],
      "Details": formBody["details"],
      "Price": formBody["price"],
      "Discount": formBody["discount"],
      "Image": formBody["image"]
    };
    return this.http.post(this.baseUrl + `/product/AddProduct`, addBody)
  }

  // Order Controls
  getAllOrders() {
    return this.http.get(this.baseUrl + "/user/AllOrders")
  }

  // User Controls
  getAllUsers() {
    return this.http.get(this.baseUrl + "/user/AllUsers")
  }

}
