import { Component, OnInit } from "@angular/core";
// import { ConfirmationService } from "primeng/api/confirmationservice";
// import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-be-product-list",
  templateUrl: "./be-product-list.component.html",
  styleUrls: ["./be-product-list.component.css"],
})
export class BeProductListComponent implements OnInit {
  // constructor(private confirmationService: ConfirmationService) {}
  constructor() {}

  ngOnInit(): void {}

  confirm_delete() {
    // this.confirmationService.confirm({
    //   message: "Are you sure that you want to perform this action?",
    //   accept: () => {
    //     //Actual logic to perform a confirmation
    //   },
    // });
    console.log("done");
  }
}
