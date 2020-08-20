import { Component } from "@angular/core";

import { PrimeNGConfig, MenuItem } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-project";

  // items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    // this.items = [
    //   {
    //     label: "File",
    //     items: [
    //       {
    //         label: "New",
    //         icon: "pi pi-fw pi-plus",
    //         items: [{ label: "Project" }, { label: "Other" }],
    //       },
    //       { label: "Open" },
    //       { label: "Quit" },
    //     ],
    //   },
    //   {
    //     label: "Edit",
    //     icon: "pi pi-fw pi-pencil",
    //     items: [
    //       { label: "Delete", icon: "pi pi-fw pi-trash" },
    //       { label: "Refresh", icon: "pi pi-fw pi-refresh" },
    //     ],
    //   },
    // ];
  }
}
