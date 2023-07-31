import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductResponse } from 'src/app/models/product-response';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:ProductResponse = new ProductResponse();
  id!:number;

  constructor(private viewBackEnd: ViewBAckendService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
       this.getProductById(this.id);
  }

  getProductById(id:number){
    this.viewBackEnd.getProductById(id).subscribe({
      next:(data)=>{
        this.product=data as ProductResponse;
        console.log(this.product);
      },
      error:(error)=>{
        console.error(error);
      }
      

    })
    

  }

}
