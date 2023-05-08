import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-sub-category',
  templateUrl: './list-sub-category.component.html',
  styleUrls: ['./list-sub-category.component.css']
})
export class ListSubCategoryComponent {
  constructor(private userService:UserService){}

  subcategorylist = []
  
  ngOnInit(){
    this.userService.getAllSubCategory().subscribe(resp=>{
      console.log(resp)
      this.subcategorylist = resp.data
    })
  }
  
  deleteSubCategory(id:any){
    console.log("SubCategoryId=>"+id);
    this.userService.deleteSubCategoryByIdd(id).subscribe(resp=>{
  
     this.subcategorylist=this.subcategorylist.filter(subcategory=> subcategory['subcategoryid'] != id);
          
     
    })  
  }


}




// constructor(private userService:UserService){}

// subcategorylist=[]

// nogOnInit(){
//   this.userService.getAllSubCategory().subscribe(resp=>{
//     console.log(resp);
//     this.subcategorylist = resp.data;
//   })
// }

// deleteSubCategory(id:any){
//   console.log("SubCategoryId=>"+id);
//   this.userService.deleteSubCategoryByIdd(id).subscribe(resp=>{
//     this.subcategorylist=this.subcategorylist.filter(subcategory=>subcategory['sid']!=id);
//   })
// }
