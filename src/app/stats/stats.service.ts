import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class StatsService {

  statsURL = "http://mistabazar.in/stats.js";

  constructor(
    private jsonp:Jsonp
  ) {}

  getStats():Observable<any>{
    let params = new URLSearchParams();
    params.set('callback', "JSONP_CALLBACK")
    console.log('status');
    return this.jsonp
      .get(this.statsURL, {search:params})
      .map((response:Response)=>{
        return response.json().stats;
      })
  }

}
