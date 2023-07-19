import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  constructor (private viewCategories: ViewBAckendService){

  }
  catagories: ProductCategory[] = [];
  ngOnInit(): void {
this.getAllCatagory();
  }
getAllCatagory(){

  this.viewCategories.getAllCategory().subscribe((result)=>{
    this.catagories=result;
    console.log(this.catagories)

  })
}

}
