import { Injectable, Inject } from "@angular/core";

@Injectable()
export class UserData {
  getUserData(): string[] {
    return ["manager", "tester", "supervisor"];
  }
}
