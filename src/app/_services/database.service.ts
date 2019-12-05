import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../_models/food.model'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

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

  getFood() {
    return this.http.get<Food[]>(`${environment.apiUrl}/food/getall`)
  }

  makeFood(food: Food) {
    return this.http.post<Food[]>(`${environment.apiUrl}/food/create`, food)
  }

}
