import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  constructor(private userService:UserService){}

  categorylist = []
  
  ngOnInit(){
    this.userService.getAllCategory().subscribe(resp=>{
      console.log(resp)
      this.categorylist = resp.data
    })
  }
  deleteCategory(id:any){
    console.log("cid=>"+id);
    this.userService.deleteCategoryById(id).subscribe(resp=>{
      this.categorylist=this.categorylist.filter(category=>category['cid']!=id);
    })
}
}
