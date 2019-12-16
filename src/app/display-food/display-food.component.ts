import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Food } from '../_models/food.model';
import { AuthenticationService } from '../_services';
import { DatabaseService } from '../_services/database.service';
import { UpdateFoodComponent } from '../update-food/update-food.component';
import { ModalContentComponent } from '../modal-content/modal-content.component'

@Component({
  selector: 'app-display-food',
  templateUrl: './display-food.component.html',
  styleUrls: ['./display-food.component.css']
})
export class DisplayFoodComponent implements OnInit { //this will store the food in _food
  //currentUser: User;
  currentUserSubscription: Subscription;  
  public _food = {
    id: 10,
    food: 'Cookies',
    quantity: 26,
    expiration: 2020/12/24,
    brand: 'RB',
  }

  // this.updateFood = this.fb.group({
  //   food: '',
  //   quantity: '',
  //   expiration: '',
  //   brand: ''
  // })

  foods: Food[] = [];
  @Input() id: number;
  

  constructor(
    private authenticationService: AuthenticationService,
    private dbService: DatabaseService,
    private modalService:NgbModal
  ) { }

  ngOnInit() {
      // this.getFoods();
  }

  deleteFood(id: number) {
      this.dbService.deleteFood(id).pipe(first()).subscribe(() => {
        location.reload();
        // this.getFoods();
      });
  }




  // getFoods() {
  //   this.dbService.getFood().pipe<Food[]>(first()).subscribe(foods => {
  //       this.foods = foods;
  //   });
  // }

  // openUpdateFood(id: number) {
  //   const modalRef = this.modalService.open(UpdateFoodComponent);
  //   modalRef.componentInstance._food.id = 10;//this._food.id // should be the id

  //   modalRef.result.then((result) => {
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance._food = this._food;
    //console.log(this._food.id); //this has all the info updated required
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        //UpdateFood()
        //this._food(result)
        this.dbService.updateFood(this._food.id)
          .subscribe(result => {this.foods = result }); //should be this._food
          console.log(result);    
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }


  updateFood(id:number) {
    this.dbService.updateFood(id).pipe(first()).subscribe(() => {

    })
  }

  @Input() set food(food:any) { //this will receive the value of food
    //console.log(this._food)
    this._food = food;
  }

  get food() : any { //this will fetch the food we stored in _food
  return this._food;
  }

}
