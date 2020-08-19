import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api/menuitem";

@Component({
  selector: "app-frontend",
  templateUrl: "./frontend.component.html",
  styleUrls: ["./frontend.component.css"],
})
export class FrontendComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "File",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [{ label: "Project" }, { label: "Other" }],
          },
          { label: "Open" },
          { label: "Quit" },
        ],
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          { label: "Delete", icon: "pi pi-fw pi-trash" },
          { label: "Refresh", icon: "pi pi-fw pi-refresh" },
        ],
      },
    ];
  }
}
