import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  get(url: string): Observable<any> {
    const option = {
      headers: new HttpHeaders()
    };
      return this.http.get(url, option).pipe(
        catchError(err => {
          throw 'error in response. Details: ' + err;
        })
      )
  }
}
