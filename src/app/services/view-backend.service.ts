import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';
import { ProductResponse } from '../models/product-response';

@Injectable({
  providedIn: 'root'
})
export class ViewBAckendService {
  private userUrl!:string;
  private publicUrl!:string;
  private adminUrl!:string;
  
    constructor(private httpClient:HttpClient) { 
      this.userUrl=environment.baseUserUrl;
      this.publicUrl=environment.basePublicUrl;
      this.adminUrl=environment.baseAdminUrl;
    }
    public getAllCategory(): Observable<ProductCategory[]>{
      return this.httpClient.get<ProductCategory[]>(this.publicUrl+'/categories')
    }
    public getAllProducts(): Observable<any>{
      return this.httpClient.get<any>(this.publicUrl+'/products?page=0&size=5')
    }

    
}
