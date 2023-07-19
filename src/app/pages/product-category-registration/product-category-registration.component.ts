import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/product-category';
import { RegistrationBackendService } from 'src/app/services/registration-backend.service';

@Component({
  selector: 'app-product-category-registration',
  templateUrl: './product-category-registration.component.html',
  styleUrls: ['./product-category-registration.component.css']
})
export class ProductCategoryRegistrationComponent implements OnInit{
  
  constructor(private registryCategory:RegistrationBackendService, private router:Router){
  
  }
  // productCatagoryForm!: FormGroup;
  ngOnInit(): void {
    // this.productCatagoryForm = new FormGroup({
    //   categoryName: new FormControl ('')
    // })

    
  }
  productCategory:ProductCategory= new ProductCategory();
  //template direven
  onSubmit(){
    this.registryCategory.registorCatagory(this.productCategory).subscribe({
      next:(data)=>{
        this.router.navigate(['/catagories'])
      },
      error:(error)=>{
        console.error(error)
      },
      complete:()=>{}
      
    })
    console.log(this.productCategory)
}

//reactive
// onSubmit(form: FormGroup){
//   this.productCategory.categoryName=form.value.categoryName
//   this.registryCategory.registorCatagory(this.productCategory).subscribe({
//     next:(data)=>{
//       this.router.navigate(['/catagories'])
//     },
//     error:(error)=>{
//       console.error(error)
//     },
//     complete:()=>{}
    
//   })
//   console.log(this.productCategory)

// }
}
