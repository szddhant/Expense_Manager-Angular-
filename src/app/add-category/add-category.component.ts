import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  addCat="";

  constructor(private userService:UserService, private router:Router){}

  addCategory(){
    console.log(this.addCat);

    let category = {
      "categoryName":this.addCat
    }

    this.userService.addCategories(category).subscribe(resp=>{
      console.log(resp);
      alert(resp.msg);

      this.router.navigateByUrl("/listcategory");
    },error=>{
      console.log(error);
      alert(error.error.msg)
    })
  }

}
