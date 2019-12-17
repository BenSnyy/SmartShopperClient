import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update-shopping',
  templateUrl: './update-shopping.component.html',
  styleUrls: ['./update-shopping.component.css']
})
export class UpdateShoppingComponent implements OnInit {
  closeResult: string;
  
  @Input() public _shopping: {
    id: number; 
    food: string; 
    quantity: number;
    owner: number; 
  };  

  constructor(
    private modalService: NgbModal, 
    public activeModal: NgbActiveModal
  ) { }
  
  ngOnInit() {
    console.log(this._shopping); //Just for debug
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  updateShopping() {
    //this.passEntry.emit(this._food);
    this.activeModal.close(this._shopping);
  }

}
