import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
    this.authService = new AuthService(http);
  }
  authService: AuthService

  addToCart(productid: string, userid: string) {
    return this.http.post(environment.baseUrl + "/cart/addtocart", { "productid": productid, "userid": userid })
  }

  getCart() {
    return this.http.get(environment.baseUrl + `/cart/MyCart?userid=${this.authService.currentUser()}`)
  }

  deleteFromCart(id: number) {
    return this.http.delete(environment.baseUrl + `/cart/deleteitem?id=${id}`)
  }

  updateQuantity(id: number, increase: boolean) {
    return this.http.patch(environment.baseUrl + `/cart/updateQty?id=${id}&increase=${increase}`, {})
  }

  placeOrder(cartValue: number, userId: number) {
    return this.http.post(environment.baseUrl + "/user/placeorder", { "price": cartValue, "userid": userId });
  }
}
