import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../_models/food.model';
import { Shopping } from '../_models/shopping.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private http: HttpClient) { }

//GETS
  getFood() : Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.apiUrl}/food/getall`)
  }

  getShopping() : Observable<Shopping[]> {
    return this.http.get<Shopping[]>(`${environment.apiUrl}/shopping/getall`)
  }

//Create or Make
  makeFood(food: Food) : Observable<Food[]> {
    return this.http.post<Food[]>(`${environment.apiUrl}/food/create`, food, httpOptions)
  }

  makeShopping(shopping: Shopping) : Observable<Shopping[]> {
    return this.http.post<Shopping[]>(`${environment.apiUrl}/shopping/create`, shopping, httpOptions)
  }

//Deletes
  deleteFood(id: number) : Observable<Food[]> {
    return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`);
  }

  deleteShop(id: number) {
    return this.http.delete<Shopping[]>(`${environment.apiUrl}/shopping/delete/${id}`);
  }


  searchFood(term: string): Observable<Food[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<Food[]>(`${environment.apiUrl}/food/getall/${term}`).pipe(
      tap(_ => (`found matching "${term}"`)),
      catchError(this.handleError<Food[]>('searchFoods', []))
    );
  }

  // updateFood(id: number) {
  //   return this.http.put<Food[]>(`${environment.apiUrl}/food/update/${id}`, food, httpOptions)

//Edit or Update
  // editFood(id: number) {
  //   return this.http.update(`${environment.apiUrl}/shopping/delete/${id}`); 
  // }

  // eraseFood(food: Food) : Observable<Food[]> {
  //   return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`, httpOptions)
  // }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
