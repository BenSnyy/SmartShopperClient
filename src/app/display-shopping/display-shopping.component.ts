import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Shopping } from '../_models/shopping.model';
import { AuthenticationService } from '../_services';
import { DatabaseService } from '../_services/database.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateShoppingComponent } from '../update-shopping/update-shopping.component'

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
    private dbService: DatabaseService,
    private modalService:NgbModal
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
      location.reload();
      this.loadAllShops();
    })
  }

  openFormModal() {
    const modalRef = this.modalService.open(UpdateShoppingComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  @Input() set shopping(shopping:any) { //this will receive the value of shopping
    this._shopping = shopping;
  }

  // get shopping() : any { //this will fetch the shopping we stored in _shopping
  // return this._shopping;
  // }

}
