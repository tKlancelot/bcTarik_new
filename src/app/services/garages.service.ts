import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';
import { Garage } from '../models/garage';


@Injectable({
  providedIn: 'root'
})
export class GaragesService {
  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-type':'application/json'
    })
  };

  garages : Garage[];
  apiUrl = 'http://localhost:3000/garages';
  apiUrl2 = 'http://localhost:3000/garages?id=1';
  
  constructor(private http:HttpClient) { }

  getAllGarages():Observable<Garage[]>{
    return this.http.get<Garage[]>(this.apiUrl, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getGarageWhereId():Observable<Garage[]>{
    return this.http.get<Garage[]>(this.apiUrl2, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // getOneGarageOwner(id: number): Observable<GarageOwner> {
  //   return this.http.get<GarageOwner>(this.apiUrl + '/' + id)
  //   .pipe(
  //   retry(1),
  //   catchError(this.handleError)
  //   );
  // }
  
  
  // addGarageOwner(garageOwner: GarageOwner): Observable<GarageOwner> {
  //   return this.http.post<GarageOwner>(this.apiUrl ,garageOwner, this.httpOptions).pipe(
  //   catchError(this.handleError)
  //   );
  // }
  
  // deleteGarageOwner(id: number): Observable<GarageOwner> {
  //   return this.http.delete<GarageOwner>(this.apiUrl + '/' + id)
  //   .pipe(
  //   retry(1),
  //   catchError(this.handleError)
  //   );
  // }
  
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
