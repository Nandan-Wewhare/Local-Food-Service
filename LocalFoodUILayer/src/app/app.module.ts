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
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { DenyaccessComponent } from './components/denyaccess/denyaccess.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'AdminLogin', component: AdminloginComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'items', component: ItemsadminComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'home', component: UserhomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatbotComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    SidenavadminComponent,
    ItemsadminComponent,
    OrdersComponent,
    UsersComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
    UserhomeComponent,
    HeaderComponent,
    CartComponent,
    SpinnerComponent,
    ProfileComponent,
    ChatbotComponent,
    DenyaccessComponent,
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
