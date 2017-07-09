import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Timezone } from './model/timezone';

@Injectable()
export class PostDataService {

//baseUrl: any;
  private baseUrl = 'http://34.209.222.50/api';  // URL to web API

  constructor(public http: Http) { }

  postTimezone(timezone:Timezone)
  {
    return this.http.post(this.baseUrl+"/create/timezone", timezone, {
    })
        .map(res =>  res.json());
  }

}
