import { Injectable } from '@angular/core';

@Injectable()
export class BaseUrlService {

  constructor() {
    this.baseUrl();
  }

  baseUrl()
  {
    return "http://34.209.222.50/api";
  }

}
