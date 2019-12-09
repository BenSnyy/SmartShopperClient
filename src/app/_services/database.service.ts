import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../_models/food.model';
import { Shopping } from '../_models/shopping.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  // private dbUrl = 'https://smartshopperserver.herokuapp.com/food/getall';

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
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
}

}
