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
 Columnmode=ColumnMode
 imageurl:any
  // constructor(private tattooService:TatooCategoryService,@Inject('imageurl')_imageurl:any){
  //   this.imageurl=_imageurl
  // }

 

}



