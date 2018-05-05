import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MyComp } from "./mycomp.component";
import { AppComponent } from "./app.component";
import { UserData } from "./userdata.service";
import { MyDepartment } from "./mydepartement.service";
import { NewcompComponent } from "./newcomp/newcomp.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { FavoriteComponent } from './favorite/favorite.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComp,
    NewcompComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    PipeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserData, MyDepartment],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule {}
