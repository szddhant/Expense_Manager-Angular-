import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent {

  addsubcategory = "";

  constructor(private userSevice:UserService, private router:Router){}

  addSubCategory(){
    console.log(this.addsubcategory);

    let subCategory = {
           "subcategoryname":this.addsubcategory
    }

    this.userSevice.addSubCategoryy(subCategory).subscribe(resp=>{
      console.log(resp)
      alert(resp.msg)

      this.router.navigateByUrl("/listsubcategory");
    },error=>{
      console.log(error);
      alert(error.error.msg)
    })
  }
}
