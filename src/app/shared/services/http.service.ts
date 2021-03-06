import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

const baseUrl = "https://reqres.in/";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getServiceForList(url:any) {
    return this.http.get<any[]>(baseUrl + url);
  }

  getService(url:any) {
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    let options = {
      headers: headers,
      observe: "response" as "response",
      withCredentials: true,
    };
    return this.http.get(url, options);
  }
}
