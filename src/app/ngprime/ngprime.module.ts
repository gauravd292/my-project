import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { PanelMenuModule } from "primeng/panelmenu";

import { ConfirmDialogModule } from "primeng/confirmdialog";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    PanelMenuModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  exports: [
    MenubarModule,
    PanelMenuModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
})
export class NgPrimeModule {}
