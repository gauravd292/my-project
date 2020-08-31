import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeProductsRoutingModule } from './be-products-routing.module';
import { BeProductsComponent } from './be-products.component';
import { BeProductListComponent } from './be-product-list/be-product-list.component';
import { BeProductFormComponent } from './be-product-form/be-product-form.component';


@NgModule({
  declarations: [BeProductsComponent, BeProductListComponent, BeProductFormComponent],
  imports: [
    CommonModule,
    BeProductsRoutingModule
  ]
})
export class BeProductsModule { }
