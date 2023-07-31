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
    public getAllCategoriesPageable(pageNo:number,pageSize:number, sort:string): Observable<any>{
      return this.httpClient.get<any>(this.adminUrl+'/categories?page='+ pageNo + "&size=" + pageSize + "&sort=" + sort)
    }
    public getAllProducts(pageNo:number,pageSize:number, sort:string): Observable<any>{
      return this.httpClient.get<any>(this.publicUrl+'/products?page=' + pageNo + "&size=" + pageSize + "&sort=" + sort);
    }
    public getCategoryById(id:number){
      return this.httpClient.get(this.publicUrl + '/category/' + id)
    }
    public getProductById(id:number){
      return this.httpClient.get(this.publicUrl + '/product/' +id)
    }
    public searchProductByKeyWord(keyword:string, pageNo:number,pageSize:number): Observable<any>{
      return this.httpClient.get(this.publicUrl + '/products?keyword=' + keyword + '&page=' + pageNo + "&size=" + pageSize );
    }
    public searchCategoryByKeyWord(keyword:string, pageNo:number,pageSize:number): Observable<any>{
      return this.httpClient.get(this.adminUrl + '/categories?keyword=' + keyword + '&page=' + pageNo + "&size=" + pageSize );
    }
    
}
