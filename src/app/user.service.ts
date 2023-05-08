import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
    
   }

   public signup(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/signup",user);
   }

   public login(user:any):Observable<any>{
    console.log(user.email);
    console.log(user.pwd);
   
    return this.httpClient.post(environment.apiUrl+"/login",user);
   }


   public forgotPassword(email: any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/forgotPassword/?email='+email);
  }


  public resetPassword(otp:any, password:any, confirmpassword:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/ResetPassword/?otp='+otp+'&password='+password+'&confirmpassword='+confirmpassword);
  }

  public addCategories(user:any):Observable<any>{
    let url = "http://localhost:9898/addCategory";
    return this.httpClient.post(url,user);
  }

  public getAllCategory():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getAllCategory")
  }
  
  public deleteCategoryById(id:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/deleteCategoryById/"+id)
  }

  public addSubCategoryy(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/addSubCategory",user)
  }
  
  public getAllSubCategory():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getAllSubCategory")
  }
  
  public deleteSubCategoryByIdd(id:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/deleteSubCategoryById/"+id)
  }

  public addVendorr(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/addVendor",user)
  }

  public getAllVendorr():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getAllVendor")
  }


  public deleteVendorByIdd(id:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/deleteVendorById/"+id)
  }
}
