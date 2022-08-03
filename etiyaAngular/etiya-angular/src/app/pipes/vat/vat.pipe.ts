import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'    //unique
})
export class VatPipe implements PipeTransform {

  transform(value: number, vat: number): number {  //: dönecek olanın veri tipi
    //value: pipe'ı uyguladığımız veri


    //return yeni değiştirdiğimiz veri
    //return 0;
    return value + (value * vat)   //  return value + value * vat;  --aynısı
  }

}
