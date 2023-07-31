import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  keyword:string='';
  length:any;
  pageNo:number=0;
  pageSize:number=5;
  sort:string="createdOn,DESC";
  pageSizeOptions:number[]=[5,10,30,60,80,100]
  constructor (private viewCategories: ViewBAckendService){

  }
  catagories: ProductCategory[] = [];
  ngOnInit(): void {
// this.getAllCatagoriesPageable(this.pageNo, this.pageSize, this.sort);
this.searchCategoryByKeyWord(this.keyword,this.pageNo, this.pageSize);
  }
// getAllCatagoriesPageable(pageNo:number,pageSize:number, sort:string){

//     this.viewCategories.getAllCategoriesPageable(pageNo,pageSize,sort).subscribe((result )=>{
//     this.catagories=result['content'];
//     this.length=result['totalElements']
       
//     console.log(this.catagories)

//   })

searchCategoryByKeyWord(keyword:string,pageNo:number, pageSize:number)
{

   this.viewCategories.searchCategoryByKeyWord(keyword,pageNo,pageSize).subscribe({
     next:(data)=>{
       this.catagories= data['content'];
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
  this.searchCategoryByKeyWord(this.keyword,this.pageNo, this.pageSize);


}
onSubmit(){
      
  this.keyword = (<HTMLInputElement>document.getElementById('keyword')).value;
  this.searchCategoryByKeyWord(this.keyword,this.pageNo, this.pageSize)


}
onSearchChange(keyword:any){
  
  this.keyword = keyword.target.value;
  this.searchCategoryByKeyWord(this.keyword,this.pageNo, this.pageSize)


}

}
