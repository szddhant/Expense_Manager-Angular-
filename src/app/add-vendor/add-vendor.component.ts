import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent {

  addvendor = "";

  constructor(private userSevice:UserService, private router:Router){}

  addVendor(){
    console.log(this.addvendor);

    let vendor = {
           "vendorname":this.addvendor
    }

    this.userSevice.addVendorr(vendor).subscribe(resp=>{
      console.log(resp)
      alert(resp.msg)

      this.router.navigateByUrl("/listvendor");
    },error=>{
      console.log(error);
      alert(error.error.msg)
    })
  }

}
