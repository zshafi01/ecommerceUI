import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponse } from 'src/app/models/product-response';
import { DeleteBackendService } from 'src/app/services/delete-backend.service';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-admin-producties',
  templateUrl: './admin-producties.component.html',
  styleUrls: ['./admin-producties.component.css']
})
export class AdminProductiesComponent implements OnInit {
  constructor (private viewProducts: ViewBAckendService, private deleteBackend: DeleteBackendService){

  }
  keyword:string='';
  length:any;
  pageNo:number=0;
  pageSize:number=6;
  sort:string="createdOn,DESC";
  pageSizeOptions:number[]=[6,12,36,81]
  products: ProductResponse[] = [];
  ngOnInit(): void {
// this.getAllProducts(this.pageNo, this.pageSize,this.sort);
this.searchProductByKeyWord(this.keyword,this.pageNo, this.pageSize)

  }
// getAllProducts(pageNo:number, pageSize:number, sort:string){

//   this.viewProducts.getAllProducts(pageNo,pageSize,sort).subscribe((result)=>{
//     this.products=result['content'];
//     this.length=result['totalElements'];

//     console.log(this.products)

//   })
// }
// onPagechanged(event:any){
//   this.pageNo =event.pageIndex;
//   this.pageSize=event.pageSize;
//   this.getAllProducts(this.pageNo, this.pageSize, this.sort)


// }

searchProductByKeyWord(keyword:string,pageNo:number, pageSize:number)
{

   this.viewProducts.searchProductByKeyWord(keyword,pageNo,pageSize).subscribe({
     next:(data)=>{
       this.products= data['content'];
       this.length=data['totalElements']
       
     },
     error:(error)=>{
       console.error(error);
     }
   }
     )
   }

    onPagechanged(event:any){
      this.pageNo =event.pageIndex;
      this.pageSize=event.pageSize;
      this.searchProductByKeyWord(this.keyword,this.pageNo, this.pageSize)

    
    }

    onSubmit(){
      
      this.keyword = (<HTMLInputElement>document.getElementById('keyword')).value;
      this.searchProductByKeyWord(this.keyword,this.pageNo, this.pageSize)


    }
    onSearchChange(keyword:any){
      
      this.keyword = keyword.target.value;
      this.searchProductByKeyWord(this.keyword,this.pageNo, this.pageSize)


    }
    
    onDelete(id:number){
      this.deleteBackend.deleteProductById(id).subscribe(data=>{
        console.log("has been deleted")
        this.ngOnInit();
      });
    }

}
