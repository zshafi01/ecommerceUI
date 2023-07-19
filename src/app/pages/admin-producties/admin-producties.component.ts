import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponse } from 'src/app/models/product-response';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-admin-producties',
  templateUrl: './admin-producties.component.html',
  styleUrls: ['./admin-producties.component.css']
})
export class AdminProductiesComponent implements OnInit {
  constructor (private viewProducts: ViewBAckendService){

  }
  products: ProductResponse[] = [];
  ngOnInit(): void {
this.getAllProducts();
  }
getAllProducts(){

  this.viewProducts.getAllProducts().subscribe((result)=>{
    this.products=result['content'];
    console.log(this.products)

  })
}

}
