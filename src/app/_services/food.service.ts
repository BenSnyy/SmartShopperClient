import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Food } from '../_models/food.model';

@Injectable({ providedIn: 'root' })
export class FoodService {
  
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Food[]>(`${environment.apiUrl}/getall`);
    }
    create(food: Food) {
        return this.http.post(`${environment.apiUrl}/food/create`, food)
    }

    //register(user: User) {
    //    return this.http.post(`${environment.apiUrl}/users/register`, user);
    //}

    //delete(id: number) {
    //    return this.http.delete(`${environment.apiUrl}/users/${id}`);
    //}
}