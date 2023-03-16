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

  }
  ColumnMode=ColumnMode
  
  imageurl:any
  rows = [];
  temp: any;
  table: any;
  imageUrl:any
  constructor(private tattooServices:TatooCategoryService,private trusturl:DomSanitizer,@Inject('imageUrl')_imageUrl:any){
    this.imageUrl=_imageUrl
  }
getImagePath(image:any){
  return this.trusturl.bypassSecurityTrustResourceUrl(this.imageUrl='/',)
}
data=[]
allTattoosCategory(){
  // this.tattooServices.allTattoo_category()
}
}
