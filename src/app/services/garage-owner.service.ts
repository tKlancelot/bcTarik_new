import { Injectable } from '@angular/core';
import { Advert } from '../models/advert';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';
import { GarageOwner } from '../models/garage-owner';


@Injectable({
  providedIn: 'root'
})
export class GarageOwnerService {

  garageOwners : GarageOwner[];


  apiUrl = 'http://localhost:3000/garageOwners';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type':'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  getAllGarageOwners():Observable<GarageOwner[]>{
    return this.http.get<GarageOwner[]>(this.apiUrl, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOneGarageOwner(id: number): Observable<GarageOwner> {
    return this.http.get<GarageOwner>(this.apiUrl + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }

  deleteGarageOwner(id: number): Observable<GarageOwner> {
    return this.http.delete<GarageOwner>(this.apiUrl + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
