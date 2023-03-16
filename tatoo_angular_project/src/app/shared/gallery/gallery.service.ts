import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
token:any
baseurl:any
  constructor(private http:HttpClient,private Auth:AuthService,@Inject('baseurl')_baseurl:any) {
    this.token=this.Auth.getToken()
    this.baseurl=_baseurl
   }
   addGallery(form:any){
    var header_object=new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+'admin/addGallery',form,{headers:header_object})
   }
}
