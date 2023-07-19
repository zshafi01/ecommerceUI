import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRegistrationComponent } from './pages/product-registration/product-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateBackendService } from './services/update-backend.service';
import { ViewBAckendService } from './services/view-backend.service';
import { RegistrationBackendService } from './services/registration-backend.service';
import { DeleteBackendService } from './services/delete-backend.service';
import {HttpClientModule} from '@angular/common/http'
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductImageRegistrationComponent } from './pages/product-image-registration/product-image-registration.component';
import { ProductCategoryRegistrationComponent } from './pages/product-category-registration/product-category-registration.component';
import {MatButtonModule} from '@angular/material/button';
import { CatagoriesComponent } from './pages/catagories/catagories.component';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { AdminProductiesComponent } from './pages/admin-producties/admin-producties.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ProductRegistrationComponent,
    ProductImageRegistrationComponent,
    ProductCategoryRegistrationComponent,
    CatagoriesComponent,
    AdminProductiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    
  ],
  providers: [
    DeleteBackendService,
    RegistrationBackendService,
    UpdateBackendService,
    ViewBAckendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
