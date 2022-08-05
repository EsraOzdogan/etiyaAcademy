import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { VatPipe } from './pipes/vat/vat.pipe';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    SaleDirective,    //exporta gerek yok şuan, kullandığım componentler bu modulde
    VatPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  exports: [       //farklı modulde kullanabilsin diye , app module
    ProductListComponent,
  ]
})
export class ProductsModule { }
