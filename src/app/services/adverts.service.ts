import { Injectable } from '@angular/core';
import { Advert } from '../models/advert';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})

export class AdvertsService { 
  
    adverts : Advert[];


    apiUrl = 'http://localhost:3000/adverts';
  
    httpOptions = {
      headers : new HttpHeaders({
        'Content-type':'application/json'
      })
    };

    constructor(private http:HttpClient) { }
  
    getAllAdverts():Observable<Advert[]>{
      return this.http.get<Advert[]>(this.apiUrl, this.httpOptions).pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  
    getOneAdvert(id: number): Observable<Advert> {
      return this.http.get<Advert>(this.apiUrl + '/' + id)
      .pipe(
      retry(1),
      catchError(this.handleError)
      );
    }
  
    addAdvert(adverts: Advert): Observable<Advert> {
      return this.http.post<Advert>(this.apiUrl ,adverts, this.httpOptions).pipe(
      catchError(this.handleError)
      );
    }
  
    updateAdvert(adverts: Advert) {
      return this.http.put<Advert>(this.apiUrl + '/' + adverts.id ,adverts, this.httpOptions).pipe(
      catchError(this.handleError)
      );
    }
  
    deleteAdvert(id: number): Observable<Advert> {
      return this.http.delete<Advert>(this.apiUrl + '/' + id)
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