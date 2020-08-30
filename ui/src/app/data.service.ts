import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlSave = "http://localhost:5000/saveCurrentFxRates";
  private urlGet = "http://localhost:5000/getCurrencyFxRates";
  constructor(public http: HttpClient) {
  }

  saveAllData() {
    return this.http.get(this.urlSave);
  }

  getAllData() {
    return this.http.get(this.urlGet);
  }
}
