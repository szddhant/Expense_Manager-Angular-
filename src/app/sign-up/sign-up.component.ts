import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

      firstname:String="";
      lastname:String="";
      email:String="";
      password:String="";
      phone:String="";

      constructor(private userService:UserService, private router:Router){
            
      }

      submit(){
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.password);
        console.log(this.phone);

        let user = {"fname" : this.firstname,
        "lname" : this.lastname,
        "email" : this.email,
        "pwd" : this.password,
        "phone" : this.phone
        }

          this.userService.signup(user).subscribe(resp=>{
            console.log(resp);
            alert(resp.msg);
            this.router.navigateByUrl("/login");
          })
      }

}
