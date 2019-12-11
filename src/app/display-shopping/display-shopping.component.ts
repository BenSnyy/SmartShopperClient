import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-display-shopping',
  templateUrl: './display-shopping.component.html',
  styleUrls: ['./display-shopping.component.css']
})
export class DisplayShoppingComponent implements OnInit {
  public _shopping = [];


  constructor() { }

  ngOnInit() {
  }

  @Input() set shopping(shopping:any) { //this will receive the value of shopping
    this._shopping = shopping;
  }

  get shopping() : any { //this will fetch the shopping we stored in _shopping
  return this._shopping;
  }

}
