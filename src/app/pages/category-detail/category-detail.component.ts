import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/models/product-category';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit{
  id!:number;
  category:ProductCategory = new ProductCategory();
  constructor(private route:ActivatedRoute, private viewBackendService: ViewBAckendService){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    // console.log(this.id);
   this.getCategoryById(this.id);
  }
getCategoryById(id:number){
  this.viewBackendService.getCategoryById(id).subscribe({
    next:(data)=>{
      this.category=data as ProductCategory
      
    },
    error:(error)=>{
      console.error(error);
    }
  })


}

}
