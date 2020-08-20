import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackendRoutingModule } from "./backend-routing.module";
import { BackendComponent } from "./backend.component";

import { PanelMenuModule } from "primeng/panelmenu";

@NgModule({
  declarations: [BackendComponent],
  imports: [CommonModule, BackendRoutingModule, PanelMenuModule],
})
export class BackendModule {}
