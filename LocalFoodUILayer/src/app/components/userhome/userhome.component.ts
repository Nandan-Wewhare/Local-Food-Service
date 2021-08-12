import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
    this.service = new AdminService(http)
    this.cartService = new CartService(http);
    this.authService = new AuthService(http)
  }
  cartAddMessage = ""
  cartAddError = ""
  products: Product[] = [];
  service: AdminService
  cartService: CartService
  authService: AuthService
  isLoading = false;
  ngOnInit(): void {
    this.isLoading = true;
    this.service.getAllProducts().subscribe((res) => {
      var responseProducts = JSON.parse(JSON.stringify((res)));
      responseProducts.forEach((item: any) => {
        this.products.push(new Product(item["ProductID"], item["ProductName"], item["Image"], item["Details"], item["Price"], item["Discount"], item["CategoryType"]));
      })
    }, (error) => { console.log(error) })
    this.isLoading = false;
  }

  addToCart(productId: string, userId: string) {
    if (this.authService.isAuthenticated()[0] == 'true') {
      this.cartService.addToCart(productId, userId).subscribe((res) => { this.cartAddMessage = "Added to cart!" }, (error) => { this.cartAddError = error["error"]["Message"] ?? error["statusText"] })
    }
    else {
      this.router.navigateByUrl("")
    }
  }


}
