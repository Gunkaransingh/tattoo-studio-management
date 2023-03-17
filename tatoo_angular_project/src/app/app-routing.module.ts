import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AlltattooCategoryComponent } from './admin/alltattoo-category/alltattoo-category.component';
import { TattooCategoryComponent } from './admin/tattoo-category/tattoo-category.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';


const routes: Routes = [
  
  // {path:'adminLogin',component:AdminLoginComponent},
  // {path:'layout',component:LayoutComponent,children:[
  //   {path:'header',component:HeaderComponent},
  //   {path:'gallery',component:GalleryComponent},
  //   {path:'footer',component:FooterComponent},
  //   {path:'addTattoCategory',component:TattooCategoryComponent}
  // ]}
 
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'layout',component:LayoutComponent,children:[
    {path:'adminLogin',component:AdminLoginComponent},
    {path:'header',component:HeaderComponent},
    {path:'addTattooCategory',component:TattooCategoryComponent},
    {path:'allTattooCategory',component:AlltattooCategoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
