import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.css"]
})
export class PipeComponent implements OnInit {
  course = {
    title: "Angular 5 for beginners",
    rating: 4.9745,
    students: 5981,
    price: 99.95,
    releaseDate: new Date(2016, 3, 1),
    description:
      "PS D:Test AppsTrainingAngularang-gitangulartrainingand we defeated Azhar today."
  };

  constructor() {}

  ngOnInit() {}
}
