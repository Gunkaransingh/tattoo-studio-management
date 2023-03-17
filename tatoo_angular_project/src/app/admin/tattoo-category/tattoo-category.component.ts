import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TatooCategoryService } from 'src/app/shared/tatooCategory/tatoo-category.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tattoo-category',
  templateUrl: './tattoo-category.component.html',
  styleUrls: ['./tattoo-category.component.css']
})
export class TattooCategoryComponent implements OnInit {
  addTattooCategoryform=new FormGroup({
    tattoo_type:new FormControl(''),
    tattoo_image:new FormControl('')
  })
  ngOnInit(): void {
   
  }
constructor(private tattooservices:TatooCategoryService, private taostr:ToastrService
  ){

}
tattoo_image:any
upload(event:any){

  if(event.target.files.length>0){
    this.tattoo_image=event.target.files[0]
  }
  console.log(event.target.files[0])
}
tattoo_type:any


submit(){
this.tattoo_type=this.addTattooCategoryform.value.tattoo_type
console.log("this.tattoo_type",this.tattoo_type)
console.log("this.tattoo_image",this.tattoo_image)
let d =new FormData()
d.append('tattoo_type',this.addTattooCategoryform.value.tattoo_type!)
// d.append('tattoo_type',this.tattoo_type)
d.append('tattoo_image',this.tattoo_image)
console.log("data",JSON.stringify(d.get("tattoo_type")))
this.tattooservices.addTattooCategory(d).subscribe({
  next:(res:any)=>{
    if(res.success){
      this.taostr.success('success',res.message)
      console.log(this.taostr)
    }
   
    else{
      this.taostr.error('error',res.message)
    }
    console.log(res)
  },
  error:(err:any)=>{
    console.log(err)
  }
})
 
}
}
