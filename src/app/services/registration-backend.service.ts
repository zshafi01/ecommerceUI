import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class RegistrationBackendService {
private userUrl!:string;
private publicUrl!:string;
private adminUrl!:string;

  constructor(private httpClient:HttpClient) { 
    this.userUrl=environment.baseUserUrl;
    this.publicUrl=environment.basePublicUrl;
    this.adminUrl=environment.baseAdminUrl;
  }
  public registorProduct(product: Product):Observable<Product>{
    return this.httpClient.post<Product> (this.userUrl + '/product',product);
  }
  public registorCatagory(productCategory: ProductCategory):Observable<ProductCategory>{
    return this.httpClient.post<ProductCategory> (this.adminUrl + '/product-category/save', productCategory);
  }

}
