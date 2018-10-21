import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MatchOfferViewService {

  private recomendationsUrl = 'api/recomendations';

  constructor(private http: HttpClient) { }

  getOffers(): Observable<any> {
    console.log("getOffers()");
    return this.http.get(this.recomendationsUrl).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: HttpErrorResponse) => observableThrowError(error || 'Server error')));
  }

}
