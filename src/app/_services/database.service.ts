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

  getFood() : Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.apiUrl}/food/getall`)
  }
  
  makeFood(food: Food) : Observable<Food[]> {
    //(food: imports interface Food model) : (Observable(asynchronous)waiting for Food  ) 
    return this.http.post<Food[]>(`${environment.apiUrl}/food/create`, food, httpOptions)
    //this.http(injected in the constructor)  
  }

  // eraseFood(food: Food) : Observable<Food[]> {
  //   return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`, httpOptions)
  // }


}
