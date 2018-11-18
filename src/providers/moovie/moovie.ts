import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseapipath = "https://api.themoviedb.org/3"
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){

  	return this.http.get(this.baseapipath + "/movie/latest?api_key=f547413f955c7b64313d3121c0ab1a06");
  }
}
