import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeProductsRoutingModule } from './fe-products-routing.module';
import { FeProductsComponent } from './fe-products.component';
import { FeProductDetailsComponent } from './fe-product-details/fe-product-details.component';
import { FeProductListComponent } from './fe-product-list/fe-product-list.component';


@NgModule({
  declarations: [FeProductsComponent, FeProductDetailsComponent, FeProductListComponent],
  imports: [
    CommonModule,
    FeProductsRoutingModule
  ]
})
export class FeProductsModule { }
