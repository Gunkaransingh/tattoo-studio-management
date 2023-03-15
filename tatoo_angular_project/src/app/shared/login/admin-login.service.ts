import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
baseurl:any
  constructor(private http:HttpClient, @Inject('baseurl')_baseurl:any) { 
    this.baseurl=_baseurl
  }
  login(form:any){
    console.log(form)
    return this.http.post(this.baseurl+'/admin/adminLogin',form)
  }
}
