import { Component, OnInit } from "@angular/core";

import { MenuItem } from "primeng/api";

@Component({
  selector: "app-backend",
  templateUrl: "./backend.component.html",
  styleUrls: ["./backend.component.css"],
})
export class BackendComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Home",
        routerLink: ["/home"],
        routerLinkActiveOptions: "true",
      },
      {
        label: "Dashboard",
        routerLink: ["/admin"],
        routerLinkActiveOptions: "active",
      },
      {
        label: "Products",
        routerLink: ["/admin/products"],
        routerLinkActiveOptions: "active",
      },
      {
        label: "Users",
        routerLink: ["/admin/users"],
        routerLinkActiveOptions: "active",
      },
    ];
  }
}
