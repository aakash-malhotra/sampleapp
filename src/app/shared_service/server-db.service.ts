import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class ServerDbService {
  private baseUrl:string='http:/localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getServers(){
    return this._http.get(this.baseUrl+'/servers', this.options).pipe(Map(Response:Response)=>Response.json());
  }
}
