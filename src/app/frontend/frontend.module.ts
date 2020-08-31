import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FrontendRoutingModule } from "./frontend-routing.module";
import { FrontendComponent } from "./frontend.component";

import { NgPrimeModule } from "./../ngprime/ngprime.module";

@NgModule({
  declarations: [FrontendComponent],
  imports: [CommonModule, FrontendRoutingModule, NgPrimeModule],
})
export class FrontendModule {}
