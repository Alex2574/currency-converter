import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:5000/getCurrencyFxRates";
  constructor(public http: HttpClient) {
  }

  getAllData() {
    return this.http.get(this.url);
  }
}
