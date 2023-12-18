import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  constructor(private http: HttpClient) { }

  fetchData() {
    // https://1.api.fy23ey06.careers.ifelsecloud.com/
    let url = "https://1.api.fy23ey06.careers.ifelsecloud.com/";
    return this.http.get(url);

  }
}
