import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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

const routes: Routes = [
  {
    component:SignUpComponent,
    path:"signup"
  },
  {
    component:WelcomePageComponent,
    path:""
  },
  
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:ForgotPasswordComponent,
    path:"forgotpassword"
  },
  {
    component:ResetPasswordComponent,
    path:"resetpassword"
  },
  {
    component:UserHomeComponent,
    path:"userhome"
  },
  {
    component:WelcomePageComponent,
    path:"welcome"
  },
  {
    component:AddCategoryComponent,
    path:"addcategory"
  },
  {
    component:ListCategoryComponent,
    path:"listcategory"
  },
  {
    component:AddSubCategoryComponent,
    path:"addsubcategory"
  },
  {
    component:ListSubCategoryComponent,
    path:"listsubcategory"
  },
  {
    component:AddVendorComponent,
    path:"addvendor"
  },
  {
    component:ListVendorComponent,
    path:"listvendor"
  },
  {
    component:AdminloginComponent,
    path:"adminlogin"
  },
  {
    component:AdminhomeComponent,
    path:"adminhome"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
