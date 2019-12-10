import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-display-food',
  templateUrl: './display-food.component.html',
  styleUrls: ['./display-food.component.css']
})
export class DisplayFoodComponent implements OnInit { //this will store the food in _food
  public _food = [[]];

  constructor() { }

  ngOnInit() {
  }

  @Input() set food(food:any) { //this will receive the value of food
    this._food = food;
  }

  get food() : any { //this will fetch the food we stored in _food
  return JSON.stringify(this._food);
  }

  delete() {
    this._food = this._food.splice[this.food];
  }
}
