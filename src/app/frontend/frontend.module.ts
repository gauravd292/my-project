import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FrontendRoutingModule } from "./frontend-routing.module";
import { FrontendComponent } from "./frontend.component";

import { MenubarModule } from "primeng/menubar";
@NgModule({
  declarations: [FrontendComponent],
  imports: [CommonModule, MenubarModule, FrontendRoutingModule],
})
export class FrontendModule {}
