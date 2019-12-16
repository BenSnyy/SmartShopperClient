import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Shopping } from '../_models/shopping.model';
import { AuthenticationService } from '../_services';
import { DatabaseService } from '../_services/database.service';
import { UpdateShoppingComponent } from '../update-shopping/update-shopping.component'

@Component({
  selector: 'app-display-shopping',
  templateUrl: './display-shopping.component.html',
  styleUrls: ['./display-shopping.component.css']
})
export class DisplayShoppingComponent implements OnInit {
  currentUserSubscription: Subscription;
  public _shopping = {
    id: 10, 
    food: 'string', 
    quantity: 26,
    expiration: 2020/12/24,
    brand: 'string',
    owner: 32, 
  };

  shops: Shopping[] = [];

  @Input() id: number;

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private dbService: DatabaseService,
    private modalService:NgbModal
  ) { }

  ngOnInit() {

  }

  private loadAllShops() {
    this.dbService.getShopping().pipe(first()).subscribe(shops => {
        //this.shopping = shops;
    });
  }

  deleteShop(id: number) {
    this.dbService.deleteShop(id).pipe(first()).subscribe(() => {
      location.reload();
      this.loadAllShops();
    })
  }

  openShoppingModal() {
    const modalRef = this.modalService.open(UpdateShoppingComponent);
    modalRef.componentInstance._shopping = this._shopping;

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.dbService.updateShopping(this._shopping.id, this.shopping)
          .subscribe(result => {this.shopping[''] = result }); //should be this._food?
          console.log(result);
      }
    // ).catch((error) => {
    //   console.log(error);
    // });
    });
    
  
  }

  @ Input() set shopping(shopping:any) { //this will receive the value of shopping
    this._shopping = shopping;
  }

  get shopping() : any { //this will fetch the shopping we stored in _shopping
  return this._shopping;
  }

}