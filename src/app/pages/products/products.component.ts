import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/models/product-response';
import { DeleteBackendService } from 'src/app/services/delete-backend.service';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:ProductResponse[] = [];
  keyword:string='';
  length:any;
  pageNo:number=0;
  pageSize:number=6;
  // sort:string="createdOn,DESC";
  pageSizeOptions:number[]=[6,12,36,81]
  constructor(private viewBackEnd: ViewBAckendService, private deleteBackend: DeleteBackendService){}
  ngOnInit(): void {
    // this.getAllProducts(this.pageNo, this.pageSize, this.sort)
        this.searchProductByKeyWord(this.keyword,this.pageNo, this.pageSize)

  }

//   getAllProducts(pageNo:number, pageSize:number, sort:string)
//  {

//     this.viewBackEnd.getAllProducts(pageNo,pageSize, sort).subscribe({
//       next:(data)=>{
//         this.products= data['content'];
//         this.length=data['totalElements']
        
//       },
//       error:(error)=>{
//         console.error(error);
//       }
//     }
//       )
//     }

searchProductByKeyWord(keyword:string,pageNo:number, pageSize:number)
{

   this.viewBackEnd.searchProductByKeyWord(keyword,pageNo,pageSize).subscribe({
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

  
    
    

  }


