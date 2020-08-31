import { Component, OnInit } from "@angular/core";
import { UsersService } from "./../../../_services/users.service";

@Component({
  selector: "app-be-user-list",
  templateUrl: "./be-user-list.component.html",
  styleUrls: ["./be-user-list.component.css"],
})
export class BeUserListComponent implements OnInit {
  userList;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userService.findMultiple().subscribe((response) => {
      this.userList = response;
    });
  }

  confirm_delete() {
    console.log("done");
  }
}
