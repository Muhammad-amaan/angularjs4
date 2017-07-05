import { Injectable } from '@angular/core';
//import  { BaseUrlService } from 'base-url.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDataService {

  //baseUrl: any;
  private baseUrl = 'http://34.209.222.50/api';  // URL to web API

  constructor(
      //public baseUrl: BaseUrlService
      private http: Http
  )
  {
    //this.baseUrl = "http://34.209.222.50/api";
    this.getTimezone();
  }

  getTimezone()
  {
    //alert("working..." + "base url is: " + this.baseUrl);
    return this.http.get(this.baseUrl+"/get/timezone")
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}