import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MyComp } from "./mycomp.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, MyComp],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule {}
