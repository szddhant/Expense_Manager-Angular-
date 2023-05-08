import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  // email="";
  // password="";
  // confirmPassword="";

  // constructor(){}

  // forgotPassword(){
  //   console.log(this.email);
  //   console.log(this.password);
  //   console.log(this.confirmPassword);

  // }

  email="";
  constructor(private services:UserService, private router:Router){}
  forgotPass(){
    console.log(this.email);

    this.services.forgotPassword(this.email).subscribe({
      next: (response) => {
        if(response.data != null){
          console.log(response);
          alert(response.msg);
          this.router.navigateByUrl("/resetpassword")
        }
        else{
          console.log(response);
          alert(response.msg);
        }
      }
    })
    
  }

}
