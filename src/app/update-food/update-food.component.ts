import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';

import { DatabaseService } from '../_services/database.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {
  
  closeResult: string;  
  // this.updateForm = new FormGroup({
  //   id: new FormControl(), 
  //   food: new FormControl(), 
  //   quantity: new FormControl(), 
  //   expiration: new FormControl(), 
  //   brand: new FormControl(), 
  //   owner: new FormControl(), 
  // });

  @Input() public _food: {
    id: number; 
    food: string; 
    quantity: number; 
    expiration: number; 
    brand: string; 
    owner: number; 
  };
  @Output() passEntry: EventEmitter<any> = new EventEmitter;
  
  constructor(
    private dbService: DatabaseService,
    private modalService: NgbModal, 
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    ) {
      //this.createForm();
    }
    
  ngOnInit() {
    console.log(this._food); //Just for debug
    

  updateFood(id: number) {
    this.dbService.updateFood(id).pipe(first()).subscribe(() => {
      //this.getFoods();
    });
  }
        
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  updateFood() {
    //this.passEntry.emit(this._food);
    this.activeModal.close(this._food);
  }

}

}
