import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/types/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
    this.cartService = new CartService(this.http);
    this.authService = new AuthService(this.http)
  }
  isLoading: boolean = false;
  error = ""
  message = ""
  cart: CartItem[] = [];
  cartValue: number = 0;
  cartService: CartService
  authService: AuthService
  ngOnInit(): void {
    this.cart = [];
    this.cartValue = 0;
    this.isLoading = true;
    this.cartService.getCart().subscribe((response) => {
      var responseProducts = JSON.parse(JSON.stringify((response)));
      responseProducts.forEach((item: any) => {
        this.cart.push(new CartItem(item["Id"], item["Product"]["ProductName"], item["Quantity"], item["Quantity"] * item["Product"]["Price"]));
        this.cartValue += item["Quantity"] * item["Product"]["Price"]
      })
      this.isLoading = false;
    }, (error) => { this.error = error["statusText"]; this.isLoading = false; })
  }

  deleteItem(id: number) {
    this.cartService.deleteFromCart(id).subscribe((res) => { this.message = "Deleted", this.ngOnInit(); }, (error) => { error["error"]["Message"] ?? error["statusText"] })
  }

  updateQty(id: number, increase: boolean) {
    this.cartService.updateQuantity(id, increase).subscribe((res) => { this.ngOnInit(); }, (error) => { this.error = error["error"]["Message"] ?? error["statusText"] })
  }

  placeOrder(cartValue: number) {
    this.cartService.placeOrder(cartValue, this.authService.currentUser()).subscribe((res) => { this.message = "Order Placed" }, (error) => { this.error = error["error"]["Message"] ?? error["statusText"] })
  }

}
