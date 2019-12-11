import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Shopping } from '../_models/shopping.model';
import { AuthenticationService } from '../_services';
import { DatabaseService } from '../_services/database.service';

@Component({
  selector: 'app-display-shopping',
  templateUrl: './display-shopping.component.html',
  styleUrls: ['./display-shopping.component.css']
})
export class DisplayShoppingComponent implements OnInit {
  currentUserSubscription: Subscription;
  public _shopping = [];
  shops: Shopping[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
  }

  private loadAllShops() {
    this.dbService.getShopping().pipe(first()).subscribe(shops => {
        this.shopping = shops;
    });
  }

  deleteShop(id: number) {
    this.dbService.deleteShop(id).pipe(first()).subscribe(() => {
        this.loadAllShops();
    })
  }

  @Input() set shopping(shopping:any) { //this will receive the value of shopping
    this._shopping = shopping;
  }

  // get shopping() : any { //this will fetch the shopping we stored in _shopping
  // return this._shopping;
  // }

}
