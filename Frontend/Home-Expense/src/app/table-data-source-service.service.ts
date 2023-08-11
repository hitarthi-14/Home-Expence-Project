import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataSourceServiceService {

  constructor(private http : HttpClient) { }

  getmonthlist()
  {
    return this.http.get<any>('https://localhost:44342/api/MonthsData/GetDataByYear')
  }
}
