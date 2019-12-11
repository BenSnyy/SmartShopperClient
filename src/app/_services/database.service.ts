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
<<<<<<< HEAD
    //(food: imports interface Food model) : (Observable(asynchronous)waiting for Food  ) 
    return this.http.post<Food[]>(`${environment.apiUrl}/food/create`, food, httpOptions)
    //this.http(injected in the constructor)  
=======
    return this.http.post<Food[]>(`${environment.apiUrl}/food/create`, food)
  }

  makeShopping(shopping: Shopping) : Observable<Shopping[]> {
    return this.http.post<Shopping[]>(`${environment.apiUrl}/shopping/create`, shopping, httpOptions)
  }

<<<<<<< HEAD
  getShopping() : Observable<Shopping[]> {
    return this.http.get<Shopping[]>(`${environment.apiUrl}/shopping/getall`)
  }
  
  makeShopping(shopping: Shopping) : Observable<Shopping[]> {
    return this.http.post<Shopping[]>(`${environment.apiUrl}/shopping/create`, shopping, httpOptions)
  }

=======
//Deletes
  deleteFood(id: number) {
    return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`);
>>>>>>> bf5ea64c1b03a0c5ed0de1b0f4ddd26d6b6ff2f5
  }

  // eraseFood(food: Food) : Observable<Food[]> {
  //   return this.http.delete<Food[]>(`${environment.apiUrl}/food/delete/${id}`, httpOptions)
  // }


>>>>>>> f8e67b26c77504c32a613c0dc4531acf5d36ebac
}
