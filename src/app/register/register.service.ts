import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private countriesUrl = 'api/countries';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {

    return this.http.get(this.countriesUrl).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: HttpErrorResponse) => observableThrowError(error || 'Server error')),);
  }
}
