import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackendRoutingModule } from "./backend-routing.module";
import { BackendComponent } from "./backend.component";

import { NgPrimeModule } from "../ngprime/ngprime.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BackendComponent],
  imports: [
    CommonModule,
    BackendRoutingModule,
    NgPrimeModule,
    ReactiveFormsModule,
  ],
})
export class BackendModule {}
