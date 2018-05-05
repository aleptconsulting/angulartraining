import { Injectable } from "@angular/core";

@Injectable()
export class MyDepartment {
  getDepartment(): string[] {
    return ["IT", "Admin", "HR"];
  }
}
