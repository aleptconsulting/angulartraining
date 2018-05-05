import { Component } from "@angular/core";
import { UserData } from "./userdata.service";

@Component({
  selector: "my-comp",
  templateUrl: "mycomp.component.html"
})
export class MyComp {
  title: string = "Hello from Vishal(2) and Narendra";
  userdata: string[];
  constructor(private userDataService: UserData) {
    this.userdata = userDataService.getUserData();
  }
}
