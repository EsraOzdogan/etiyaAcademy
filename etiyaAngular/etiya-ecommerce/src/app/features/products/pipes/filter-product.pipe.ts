import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], categoryId: number): Product[] {
    if(categoryId && categoryId > 0)     //undefined olmaması ve  0'dan büyük olması
      return value.filter((v) => v.categoryId == categoryId);
    return value;
  }

}
