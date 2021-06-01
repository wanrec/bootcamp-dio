import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseurl = 'https://bootcamp-wanrec.herokuapp.com/bootcamp'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    // const url = 'https://bootcamp-wanrec.herokuapp.com/bootcamp/stock';
    return this.http.get<Stock[]>(`${this.baseurl}/stock`).toPromise();
  }
}
