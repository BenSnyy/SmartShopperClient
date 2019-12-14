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
  @Input() public _food;
  @Output() passEntry: EventEmitter<any> = new EventEmitter;
  myForm: FormGroup;
  
  constructor(
    private dbService: DatabaseService,
    private modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
    ) {
      this.createForm();
    }
    
    ngOnInit() {
      console.log(this._food);
    }
    
    
    


  updateFood(id: number) {
    this.dbService.updateFood(id).pipe(first()).subscribe(() => {
    
      //this.getFoods();
    });
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      id: '',
      food: '',
      quantity: '',
      expiration: '',
      brand: '',
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  passBack() {
    this.passEntry.emit(this._food);
    this.activeModal.close(this._food);
  }

}
