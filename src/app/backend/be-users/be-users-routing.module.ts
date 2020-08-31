import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BeUsersComponent } from "./be-users.component";
import { BeUserListComponent } from "./be-user-list/be-user-list.component";
import { BeUserFormComponent } from "./be-user-form/be-user-form.component";

const routes: Routes = [
  {
    path: "",
    component: BeUsersComponent,
    children: [
      {
        path: "",
        component: BeUserListComponent,
      },
      {
        path: "list",
        component: BeUserListComponent,
      },
      {
        path: "create",
        component: BeUserFormComponent,
      },
      {
        path: "update/:id",
        component: BeUserFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeUsersRoutingModule {}
