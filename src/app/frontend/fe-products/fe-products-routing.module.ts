import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeProductsComponent } from './fe-products.component';

const routes: Routes = [{ path: '', component: FeProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeProductsRoutingModule { }
