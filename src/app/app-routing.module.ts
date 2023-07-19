import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductiesComponent } from './pages/admin-producties/admin-producties.component';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { ProductCategoryRegistrationComponent } from './pages/product-category-registration/product-category-registration.component';
import { ProductRegistrationComponent } from './pages/product-registration/product-registration.component';

const routes: Routes = [
  {path:'add-product', component:ProductRegistrationComponent},
  {path:'add-catagory', component:ProductCategoryRegistrationComponent},
  {path:'catagories', component:CatagoriesComponent},
  {path:'products', component:AdminProductiesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
    
}
