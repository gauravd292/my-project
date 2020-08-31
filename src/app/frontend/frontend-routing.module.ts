import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FrontendComponent } from "./frontend.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: FrontendComponent },
  { path: "home", component: FrontendComponent },
  { path: 'fe-products', loadChildren: () => import('./fe-products/fe-products.module').then(m => m.FeProductsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
