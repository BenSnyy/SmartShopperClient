import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../_services/database.service';
import { Food } from '../_models/food.model';


@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {
  createFood: FormGroup;
  food = [];

  constructor(
    private fb: FormBuilder, 
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    this.createFood = this.fb.group({
      food: new FormControl(),
      quantity: new FormControl(),
      expiration: new FormControl(),
      brand: new FormControl()
    })
    this.findFood();
  }

  onCreateFood() : void {
    //             void(is used after functions that doesn't return a value)        
    this.food.unshift(this.createFood.value)
    this.dbService.makeFood(this.food[0]).subscribe(Food => {console.log(Food)
    this.food[''] = Food})
  }

  findFood() : void {
    this.dbService.getFood().subscribe(Food => {
      this.food = Food;
      this.food.reverse();
    })
  }

}