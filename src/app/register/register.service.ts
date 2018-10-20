import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterService {

  private countriesUrl = 'api/countries';
  private cvUrl = 'api/cv';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(this.countriesUrl).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: HttpErrorResponse) => observableThrowError(error || 'Server error')));
  }

  saveCV(body: any): Observable<any> {
    return this.http.post(this.cvUrl, body).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: HttpErrorResponse) => observableThrowError(error || 'Server error')));
  }
}
