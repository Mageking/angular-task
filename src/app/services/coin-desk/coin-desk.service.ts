import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinDeskService {

  constructor(private http: HttpClient) { }

  getHistory() {
    return this.http.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2018-09-05');
  }
}
