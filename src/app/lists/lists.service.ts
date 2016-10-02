import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ListsService {

  listUrl = "http://mistabazar.in/lists.js";

  constructor(
    private jsonp: Jsonp
  ) {

  }

  getHotels(page:string="1", sortBy:string="ratings"){
    let params = new URLSearchParams();
    params.set("page", page);
    params.set("sortBy", sortBy);
    params.set("callback", "JSONP_CALLBACK");
    return this.jsonp
        .get(this.listUrl, {search:params})
        .map((response:Response) => {
          return response.json().deals;
        });
  }

}
