import { Component } from "@angular/core";
import { UserData } from "./userdata.service";
import { MyDepartment } from "./mydepartement.service";

@Component({
  selector: "my-comp",
  templateUrl: "mycomp.component.html"
})
export class MyComp {
  title: string = "Hello from Vishal(2) and Narendra";
  userdata: string[];
  departmentTitle: string = "Departments";
  userDataTitle: string = "User Data";
  myDept: string[];
  myvalue: string = "Vishal";
  constructor(userDataService: UserData, myDept: MyDepartment) {
    this.userdata = userDataService.getUserData();
    this.myDept = myDept.getDepartment();
  }
}
