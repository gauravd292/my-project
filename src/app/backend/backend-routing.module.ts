import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BackendComponent } from "./backend.component";

const routes: Routes = [
  {
    path: "",
    component: BackendComponent,
    children: [
      {
        path: "products",
        loadChildren: () =>
          import("./be-products/be-products.module").then(
            (m) => m.BeProductsModule
          ),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./be-users/be-users.module").then((m) => m.BeUsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendRoutingModule {}
