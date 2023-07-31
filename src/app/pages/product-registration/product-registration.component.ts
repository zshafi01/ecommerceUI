import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductImage } from 'src/app/models/product-image';
import { RegistrationBackendService } from 'src/app/services/registration-backend.service';
import { ViewBAckendService } from 'src/app/services/view-backend.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit{
  product:Product= new Product();
  catagories: ProductCategory[] =[];
  constructor(private registrationProduct: RegistrationBackendService,private viewBackendService: ViewBAckendService, private rounter:Router){
    
  }
  // productForm!:FormGroup;

  ngOnInit(): void {
// this.productForm= new FormGroup({
//   name: new FormControl(''),
//   description: new FormControl(''),
//   price: new FormControl(''),
//   quantity: new FormControl('')
// }
// )

this.getAllCatagory();
  }

  // onSubmit(form: FormGroup){
  //   this.product.name = form.value.name;
  //   this.product.description = form.value.description;
  //   this.product.price =  form.value.price;
  //   this.product.quantity = form.value.quantity;
  //   this.product.category=1;
  //   let imageUrls:ProductImage= new ProductImage();
  //   imageUrls.url='https://ictoblog.nl/files/aldi_phone.jpg';
  //   imageUrls.primary= true;
  //   let productImageList: ProductImage[]=[];
  //   productImageList.push(imageUrls);
  //   this.product.productImageList = productImageList;
  //   debugger
  //   this.registrationProduct.registorProduct(this.product).subscribe({
  //     next:(data)=> {
  //       console.log("save data", data)

  //       this.rounter.navigate(['/products'])
        
  //     },
  //     error:(error)=>{
  //       console.error("the error is" , error)
  //     },
  //     complete:()=>{
  

  //     }

  //   })
  // }
getAllCatagory(){

  this.viewBackendService.getAllCategory().subscribe((result)=>{
    this.catagories=result;
    console.log(this.catagories)

  })
}

  onSubmit( ){
    
    // this.product.category=1;
    let imageUrls:ProductImage= new ProductImage();
    imageUrls.url='https://ictoblog.nl/files/aldi_phone.jpg';
    imageUrls.primary= true;
    let productImageList: ProductImage[]=[];
    productImageList.push(imageUrls);
    this.product.productImageList = productImageList;
    
    this.registrationProduct.registorProduct(this.product).subscribe({
      next:(data)=> {
        console.log("save data", data)

        this.rounter.navigate(['/products'])
        
      },
      error:(error)=>{
        console.error("the error is" , error)
      },
      complete:()=>{
  

      }

    })
  }

}
