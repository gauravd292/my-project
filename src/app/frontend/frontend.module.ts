import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FrontendRoutingModule } from "./frontend-routing.module";
import { FrontendComponent } from "./frontend.component";

import { MenubarModule } from "primeng/menubar";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class FrontendModule {}
