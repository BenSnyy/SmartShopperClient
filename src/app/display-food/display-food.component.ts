import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Food } from '../_models/food.model';
import { AuthenticationService } from '../_services';
import { FoodService } from '../_services/food.service';

@Component({
  selector: 'app-display-food',
  templateUrl: './display-food.component.html',
  styleUrls: ['./display-food.component.css']
})
export class DisplayFoodComponent implements OnInit { //this will store the food in _food
  //currentUser: User;
  currentUserSubscription: Subscription;  
  public _food = {};
  foods: Food[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private foodService: FoodService,
  ) { }

  ngOnInit() {
      this.loadAllFoods();
  }

  private loadAllFoods() {
    this.foodService.getAll().pipe(first()).subscribe(foods => {
        this.foods = foods;
    });
}

  @Input() set food(food:any) { //this will receive the value of food
    this._food = food;
}

get food() : any { //this will fetch the food we stored in _food
  return this._food;
}

}
