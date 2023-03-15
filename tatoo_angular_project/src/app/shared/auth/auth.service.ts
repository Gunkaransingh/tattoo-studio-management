import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setEmail(data:any){
    localStorage.setItem('data',data.data.email)
    localStorage.setItem('token',data.token)
  }

  getEmail(){
    return localStorage.getItem('email')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  removeEmail(){
     localStorage.removeItem('email')
    localStorage.removeItem('token')
  }
}
