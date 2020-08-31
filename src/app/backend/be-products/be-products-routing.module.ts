import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BeProductsComponent } from "./be-products.component";

import { BeProductListComponent } from "./../be-products/be-product-list/be-product-list.component";
import { BeProductFormComponent } from "./../be-products/be-product-form/be-product-form.component";

const routes: Routes = [
  {
    path: "",
    component: BeProductsComponent,
    children: [
      {
        path: "",
        component: BeProductListComponent,
      },
      {
        path: "list",
        component: BeProductListComponent,
      },
      {
        path: "form",
        component: BeProductFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeProductsRoutingModule {}
