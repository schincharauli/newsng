import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // newsAPI
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c4b99051f55d4128aa5b200c0578a440";

  // busiessnewsapiurl 
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c4b99051f55d4128aa5b200c0578a440";

  // technewsapiurl 
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4b99051f55d4128aa5b200c0578a440";


  // topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  // technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }

  // businessnews
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
}


