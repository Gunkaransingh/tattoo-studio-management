import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { AdminLoginService } from '../shared/login/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private adminservices:AdminLoginService, private auth:AuthService,private toastr: ToastrService,private router:Router){}
  ngOnInit(): void {
    
  }
  submit(){
    this.adminservices.login(this.adminLoginForm.value).subscribe(
      (res:any)=>{
      if(res.success){
        this.toastr.success('success',res.message)
        this.router.navigateByUrl('/layout')
      console.log(res.success)
      }
      else{
      this.toastr.error('error',res.message)
      }
      },
      err=>{
        console.log(err)
      }
    )
  }
}
