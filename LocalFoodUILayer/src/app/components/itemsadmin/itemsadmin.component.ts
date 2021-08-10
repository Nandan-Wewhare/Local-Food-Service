import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-itemsadmin',
  templateUrl: './itemsadmin.component.html',
  styleUrls: ['./itemsadmin.component.css']
})
export class ItemsadminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products: [] = [];
  ngOnInit(): void {
    var admin = new AdminService(this.http);
    admin.getAllProducts().subscribe((response) => {
      console.log(response);
    }, (error) => { console.log(error) })
  }

}
