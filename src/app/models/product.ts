import { ProductImage } from "./product-image";

export class Product {

    public id!:number;
    public name!:string;
    public description!:string;
    public price!:number;
    public quantity!:number;
    public category!:number;
    public productImageList!:ProductImage[];
    public createdOn!:Date;
    
}
