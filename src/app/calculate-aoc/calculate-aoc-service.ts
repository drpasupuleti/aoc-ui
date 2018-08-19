import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CalculateAOCService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:4201/calculateAOC';


  public calculateAOC(radius) {
    return this.http.get<number>(this.userUrl + '/' + radius);
  }

}
