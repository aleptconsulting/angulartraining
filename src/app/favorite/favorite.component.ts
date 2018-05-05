import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
  inputs: ["isFavorite"],
  outputs: ["changecolor"]
})
export class FavoriteComponent implements OnInit {
  constructor() {}
  @Input() isFavorite: boolean = false;
  changecolor() {
    this.isFavorite = !this.isFavorite;
  }
  ngOnInit() {}
}
