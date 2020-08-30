import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlSave = "http://localhost:5000/saveCurrentFxRates";
  private urlGet = "http://localhost:5000/getCurrencyFxRates";
  private urlUserActivity = "http://localhost:5000/saveUserActivity";
  constructor(private http: HttpClient) {
  }
  
  saveUserActivity(userInfo) {
    return this.http.post(this.urlUserActivity, userInfo);
  }

  saveAllData() {
    return this.http.get(this.urlSave);
  }

  getAllData() {
    return this.http.get(this.urlGet);
  }
}
