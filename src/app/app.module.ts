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
import { FavoriteComponent } from "./favorite/favorite.component";
import { PipeComponent } from "./pipe/pipe.component";
import { SummaryPipe } from "./custompipes/summary.pipe";
import { FormsdemoComponent } from "./formsdemo/formsdemo.component";
import { HttpModule } from "@angular/http";
import { HttpService } from "./http.service";
import { LoginComponent } from "./login/login.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { ServicesComponent } from "./services/services.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    MyComp,
    NewcompComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    PipeComponent,
    SummaryPipe,
    FormsdemoComponent,
    LoginComponent,
    UserdetailsComponent,
    ServicesComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [UserData, MyDepartment],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule {}
