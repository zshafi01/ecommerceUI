import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductiesComponent } from './pages/admin-producties/admin-producties.component';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProductCategoryRegistrationComponent } from './pages/product-category-registration/product-category-registration.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductRegistrationComponent } from './pages/product-registration/product-registration.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'add-product', component:ProductRegistrationComponent},
  {path:'add-catagory', component:ProductCategoryRegistrationComponent},
  {path:'catagories', component:CatagoriesComponent},
  {path: 'catagory/:id', component:CategoryDetailComponent},
  {path:'products', component:AdminProductiesComponent},
  {path:'product/:id', component:ProductDetailComponent},
  {path: 'home', component:ProductsComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
    
}
