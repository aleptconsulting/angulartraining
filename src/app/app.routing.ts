import { Router, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { ServicesComponent } from "./services/services.component";

export const routing = RouterModule.forRoot([
  { path: "", component: LoginComponent },
  { path: "userdetails", component: UserdetailsComponent },
  { path: "services", component: ServicesComponent }
]);
