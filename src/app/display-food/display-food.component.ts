import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Food } from '../_models/food.model';
import { AuthenticationService } from '../_services';
import { DatabaseService } from '../_services/database.service';

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
    private dbService: DatabaseService,
  ) { }

  ngOnInit() {
      this.getFoods();
      //this.findFood();
  }

  // findFood() {
  //   this.dbService.getFood().subscribe(foods => {
  //     this.foods = foods;
  //     this.food.reverse();
  //   })
  // }

  getFoods() {
    this.dbService.getFood().pipe(first()).subscribe(foods => {
        this.foods = foods;
    });
  }

  deleteFood(id: number) {
    this.dbService.deleteFood(id).pipe(first()).subscribe(() => {
        this.getFoods();
    });
  }

  // updateFood(id:number) {
  //   this.dbService.updateFood(id).pipe(first()).subscribe(() => {

  //   })
  // }

  @Input() set food(food:any) { //this will receive the value of food
    this._food = food;
  }

  // get food() : any { //this will fetch the food we stored in _food
  // return this._food;
  // }
}
