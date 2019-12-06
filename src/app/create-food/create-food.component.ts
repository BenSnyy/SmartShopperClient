import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { DatabaseService } from '../_services/database.service'

import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
// import { FoodService } from '../_services/'


@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {
  createFood: FormGroup;
  food = [];

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

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
    this.food.unshift(this.createFood.value)
    this.dbService.makeFood(this.food[0]).subscribe(Food => this.food[0] = Food)
  }

  findFood() : void {
    this.dbService.getFood().subscribe(Food => {
      this.food = Food;
      this.food.reverse();
    })
  }

}
