import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MyComp } from "./mycomp.component";
import { AppComponent } from "./app.component";
import { UserData } from "./userdata.service";
import { MyDepartment } from "./mydepartement.service";
import { NewcompComponent } from './newcomp/newcomp.component';

@NgModule({
  declarations: [AppComponent, MyComp, NewcompComponent],
  imports: [BrowserModule],
  providers: [UserData, MyDepartment],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule {}
