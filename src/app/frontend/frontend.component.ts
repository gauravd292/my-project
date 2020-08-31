import { Component, OnInit } from "@angular/core";

// import { MenuItem } from "primeng/api";

import { PrimeNGConfig, MenuItem } from "primeng/api";

@Component({
  selector: "app-frontend",
  templateUrl: "./frontend.component.html",
  styleUrls: ["./frontend.component.css"],
})
export class FrontendComponent implements OnInit {
  items: MenuItem[];

  // constructor() {}
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.items = [
      {
        label: "Home",
        routerLink: ["/home"],
        routerLinkActiveOptions: "true",
      },
      {
        label: "Admin",
        routerLink: ["/admin"],
        routerLinkActiveOptions: "true",
      },
    ];
  }
}
