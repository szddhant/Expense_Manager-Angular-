import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  otp:Number=0;
  password="";
  confirmPassword="";
  constructor(private service:UserService, private router:Router){}
  resetPassword()
  {
    this.service.resetPassword(this.otp, this.password, this.confirmPassword).subscribe({
      next: (resp) => {
        if(resp.data != null)
        {
          console.log(resp.msg);
          alert(resp.msg);
          this.router.navigateByUrl("/login")
        }
        else
        {
          console.log(resp.msg);
          alert(resp.msg);
        }
      }
    })
  }
}
