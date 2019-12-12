import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Food } from '../_models/food.model';
import { Shopping } from '../_models/shopping.model';
import { Observable } from 'rxjs';

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
  deleteFood(id: number) {
    return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`);
  }

  deleteShop(id: number) {
    return this.http.delete<Shopping[]>(`${environment.apiUrl}/shopping/delete/${id}`);
  }

  // updateFood(id: number) {
  //   return this.http.put<Food[]>(`${environment.apiUrl}/food/update/${id}`, food, httpOptions);
  // }

}
