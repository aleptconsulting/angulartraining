import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MyComp } from "./mycomp.component";
import { AppComponent } from "./app.component";
import { UserData } from "./userdata.service";

@NgModule({
  declarations: [AppComponent, MyComp],
  imports: [BrowserModule],
  providers: [UserData],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule {}
