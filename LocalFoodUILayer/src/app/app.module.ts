import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SidenavadminComponent } from './components/sidenavadmin/sidenavadmin.component';
import { ItemsadminComponent } from './components/itemsadmin/itemsadmin.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'items', component: ItemsadminComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'users', component: UsersComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    SidenavadminComponent,
    ItemsadminComponent,
    OrdersComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
