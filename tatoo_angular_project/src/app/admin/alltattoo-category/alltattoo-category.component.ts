import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { TatooCategoryService } from 'src/app/shared/tatooCategory/tatoo-category.service';
@Component({
  selector: 'app-alltattoo-category',
  templateUrl: './alltattoo-category.component.html',
  styleUrls: ['./alltattoo-category.component.css']
})
export class AlltattooCategoryComponent implements OnInit {
  ngOnInit(): void {
    this.getAllTattooCategory()
  }
  ColumnMode=ColumnMode
  rows = [];
  temp: any;
  table: any;
imageurl:any
  constructor(private trustUrl:DomSanitizer, private tattooService:TatooCategoryService,@Inject('imageurl')_imageurl:any){
    this.imageurl=_imageurl
  }
getImagePath(image:any){
  return this.trustUrl.bypassSecurityTrustResourceUrl(this.imageurl+'/'+image)
}
  data=[]
getAllTattooCategory(){
  this.tattooService.allTattoo_category({}).subscribe(
    (res:any)=>{
      this.data=res.data
      this.rows=res.data
      this.temp=res.data
    },
    err=>{
      console.log(err)
    }
  )
}
}



