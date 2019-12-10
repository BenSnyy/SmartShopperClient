import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../_services/database.service';


@Component({
  selector: 'app-create-shopping',
  templateUrl: './create-shopping.component.html',
  styleUrls: ['./create-shopping.component.css']
})
export class CreateShoppingComponent implements OnInit {

  createShopping: FormGroup;
  shopping = [];

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit() {
    this.createShopping = this.fb.group({
      food: new FormControl(),
      quantity: new FormControl(),
      brand: new FormControl()
    })
    this.findShopping();
  }

  onCreateShopping() : void {
    this.shopping.unshift(this.createShopping.value)
    this.dbService.makeShopping(this.shopping[0]).subscribe(Shopping => this.shopping[''] = Shopping)
  }

  findShopping() : void {
    this.dbService.getShopping().subscribe(Shopping => {
      this.shopping = Shopping;
      this.shopping.reverse();
    })
  }

}