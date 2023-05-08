import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserHomeComponent,
    WelcomePageComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    AddSubCategoryComponent,
    ListSubCategoryComponent,
    AddVendorComponent,
    ListVendorComponent,
    AdminloginComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
