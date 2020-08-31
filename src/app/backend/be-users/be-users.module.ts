import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BeUsersRoutingModule } from "./be-users-routing.module";
import { BeUsersComponent } from "./be-users.component";
import { BeUserListComponent } from "./be-user-list/be-user-list.component";
import { BeUserFormComponent } from "./be-user-form/be-user-form.component";
import { UsersService } from "src/app/_services/users.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BeUsersComponent, BeUserListComponent, BeUserFormComponent],
  imports: [CommonModule, BeUsersRoutingModule, ReactiveFormsModule],
  providers: [UsersService],
})
export class BeUsersModule {}
