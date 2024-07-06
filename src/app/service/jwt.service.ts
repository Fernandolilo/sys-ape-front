import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL =  ["http://localhost:8080/*"]
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

register (singRequest : any): Observable<any>{
  return this.http.post(BASE_URL + 'singnup', singRequest)
}
}
