import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
// import { Observable } from "rxjs/Rx";
import { Observable } from "rxjs";
// import { map, filter, switchMap } from "rxjs/operators";
// import "rxjs/add/operator/map";

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  getData() {
    return this.http
      .get("https://taskmanager-25b59.firebaseio.com/title.json")
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("https://taskmanager-25b59.firebaseio.com/amdocs.json", body, {
        headers: headers
      })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http
      .get("https://taskmanager-25b59.firebaseio.com/amdocs.json")
      .map((response: Response) => response.json());
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
