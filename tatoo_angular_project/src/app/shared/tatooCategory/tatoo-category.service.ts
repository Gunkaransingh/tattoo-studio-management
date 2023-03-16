import { Injectable,Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TatooCategoryService {
baseurl:any
token:any
  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any,private auth :AuthService) {
    this.baseurl=_baseurl
    this.token=this.auth.getToken()
   }
  addTattooCategory(form:any){
    var header_object=new HttpHeaders().set('Authorization',this.token)
   return this.http.post(this.baseurl+'/admin/addTattoosCategory',form,{headers:header_object})
  }
  allTattoo_category(id:any){
    var header_object=new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+'admin/viewAllTattoosCategory',id,{headers:header_object})
  }
}
