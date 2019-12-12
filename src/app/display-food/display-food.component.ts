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
  }

  deleteFood(id: number) {
      this.dbService.deleteFood(id).pipe(first()).subscribe(() => {
        location.reload();
        this.getFoods();
      });
  }

  getFoods() {
    this.dbService.getFood().pipe<Food[]>(first()).subscribe(foods => {
        this.foods = foods;
    });
  }


  // updateFood(id:number) {
  //   this.dbService.updateFood(id).pipe(first()).subscribe(() => {

  //   })
  // }

  @Input() set food(food:any) { //this will receive the value of food
    //console.log(this._food)
    this._food = food;
  }

  get food() : any { //this will fetch the food we stored in _food
  return this._food;
  }

  // delete(_id: number) {
  //   this.food = this.food.delete[this.food.id];
  //   console.log(this._food)
  //   console.log(this.food)
  // }
}
