import { ProductCategory } from "./product-category";
import { ProductImage } from "./product-image";

export class ProductResponse {
    public id!:number;
    public name!:string;
    public description!:string;
    public price!:number;
    public quantity!:number;
    public categories!:ProductCategory[];
    public productImageList!:ProductImage[];
    public createdOn!:Date;
}
