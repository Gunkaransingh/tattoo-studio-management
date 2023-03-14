import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {path:'admin',component:AdminLoginComponent},
  {path:'layout',component:LayoutComponent,children:[
    {path:'header',component:HeaderComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'footer',component:FooterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
