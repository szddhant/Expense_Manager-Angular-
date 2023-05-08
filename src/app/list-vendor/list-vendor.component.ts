import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.css']
})
export class ListVendorComponent {

  constructor(private userService:UserService){}

  vendorlist = []
  
  ngOnInit(){
    this.userService.getAllVendorr().subscribe(resp=>{
      console.log(resp)
      this.vendorlist = resp.data
    })
  }
  
  deleteVendor(id:any){
    console.log("VendorId=>"+id);
    this.userService.deleteVendorByIdd(id).subscribe(resp=>{
  
     this.vendorlist=this.vendorlist.filter(vendor=> vendor['vendorid'] != id);
          
     
    })  
  }

}
