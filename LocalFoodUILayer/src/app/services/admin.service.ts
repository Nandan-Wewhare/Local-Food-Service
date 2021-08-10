import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl;
  getAllProducts() {
    return this.http.get(this.baseUrl + "/user/allProducts")
  }


}
