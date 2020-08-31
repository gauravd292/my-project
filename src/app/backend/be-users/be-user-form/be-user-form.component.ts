import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/_services/users.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-be-user-form",
  templateUrl: "./be-user-form.component.html",
  styleUrls: ["./be-user-form.component.css"],
})
export class BeUserFormComponent implements OnInit {
  data;

  formObj = new FormGroup({
    name: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    address: new FormGroup({
      suite: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      zipcode: new FormControl("", [Validators.required]),
    }),
    website: new FormControl("", [Validators.required]),
  });

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramList) => {
      let id = +paramList.get("id");
      if (id) {
        this.getSingle(id);
      }
    });
  }

  get frm() {
    return this.formObj;
  }

  getSingle(id: number): void {
    this.userService.findSingle(id).subscribe((response) => {
      this.data = response;

      this.formObj.patchValue({
        name: this.data.name,
        username: this.data.username,
        email: this.data.email,
        phone: this.data.phone,
        website: this.data.website,
        address: {
          suite: this.data.address.suite,
          street: this.data.address.street,
          city: this.data.address.city,
          zipcode: this.data.address.zipcode,
        },
      });
    });
  }

  onFrmSubmit(): void {
    if (this.formObj.pristine) {
      console.log("No change");
    } else {
      console.log(this.formObj);
    }
  }
}
