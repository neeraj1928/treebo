import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class SearchService {

  searchURL = "http://mistabazar.in/search.js";

  constructor(
    private jsonp:Jsonp
  ) {}

  searchQuery(query:string):Observable<any>{
    let params = new URLSearchParams();
    params.set("query", query);
    params.set("callback", "JSONP_CALLBACK");

    return this.jsonp
        .get(this.searchURL, {search:params})
        .map(response => {
          console.log(response.json());
          return response.json().results;
        });
  }

}
