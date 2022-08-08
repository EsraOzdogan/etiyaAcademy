import Product from "../../products/models/product";

export interface CartItem{
    product : Product;
    quantity:number;
}
