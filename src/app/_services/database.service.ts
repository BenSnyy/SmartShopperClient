import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Food } from '../_models/food.model';
import { Shopping } from '../_models/shopping.model';

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

//Gets
  getFood() : Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.apiUrl}/food/getall`);
  }

  getShopping() : Observable<Shopping[]> {
    return this.http.get<Shopping[]>(`${environment.apiUrl}/shopping/getall`);
  }

//Create or Make
  makeFood(food: Food) : Observable<Food[]> {
    return this.http.post<Food[]>(`${environment.apiUrl}/food/create`, food, httpOptions);
  }

  makeShopping(shopping: Shopping) : Observable<Shopping[]> {
    return this.http.post<Shopping[]>(`${environment.apiUrl}/shopping/create`, shopping, httpOptions);
  }

//Deletes
  deleteFood(id: number) : Observable<Food[]> {
    return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`);
  }

  deleteShop(id: number) {
    return this.http.delete<Shopping[]>(`${environment.apiUrl}/shopping/delete/${id}`);
  }

//Updates or Patchs  
  updateFood(id: number, food: Food) {
    return this.http.put<Food[]>(`${environment.apiUrl}/food/update/${id}`, food, httpOptions)
  }
  
  updateShopping(id: number, shopping: Shopping) {
    return this.http.put<Shopping[]>(`${environment.apiUrl}/shopping/update/${id}`, shopping, httpOptions)
  }  

  // updateFood(id: number) {
  //   return this.http.put<Food[]>(`${environment.apiUrl}/food/update/${id}`, id, httpOptions)
  // } 
  
    //Edit or Update
    // editFood(id: number) {
      //   return this.http.update(`${environment.apiUrl}/shopping/delete/${id}`); 
      // }
      
      // eraseFood(food: Food) : Observable<Food[]> {
        //   return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`, httpOptions)
        // }
        
  // searchFood(term: string): Observable<Food[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty array.
  //     return of([]);
  //   }
  //   return this.http.get<Food[]>(`${environment.apiUrl}/food/getall/${term}`).pipe(
  //     tap(_ => (`found matching "${term}"`)),
  //     catchError(this.handleError<Food[]>('searchFoods', []))
  //   );
  // }
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
