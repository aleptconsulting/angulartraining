import { Component, OnInit } from "@angular/core";
import { UserData } from "./userdata.service";
import { MyDepartment } from "./mydepartement.service";

@Component({
  selector: "my-comp",
  templateUrl: "mycomp.component.html"
})
export class MyComp implements OnInit {
  title: string = "Hello from Vishal(2) and Narendra";
  userdata: string[];
  departmentTitle: string = "Departments";
  userDataTitle: string = "User Data";
  myDept: string[];
  myvalue: string = "Vishal";
  myval: string = "Vishal Patel";
  selected: boolean = true;
  cartitems: string[] = [];
  isFavorite: boolean = true;
  ngOnInit() {
    this.userdata = this.userDataService.getUserData();
    this.myDept = this.myDeptService.getDepartment();
    this.cartitems = ["Mobile", "AC", "Washing Machine IFB"];
  }

  constructor(
    private userDataService: UserData,
    private myDeptService: MyDepartment
  ) {}
  callme($event) {
    alert("Called");
    alert($event);
  }
  changecolorparent() {
    alert("in");
  }
}
