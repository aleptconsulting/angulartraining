import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-formsdemo",
  templateUrl: "./formsdemo.component.html",
  styleUrls: ["./formsdemo.component.css"]
})
export class FormsdemoComponent implements OnInit {
  userdata = {
    username: "Vishal",
    password: "vishal",
    email: "t@t.com",
    city: "Ahmedabad"
  };
  constructor() {}

  ngOnInit() {}
  formsubmit(nf: NgForm) {
    alert("I am called!");
    console.log(nf.value);
  }
}
