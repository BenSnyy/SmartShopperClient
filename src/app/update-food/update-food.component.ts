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

<<<<<<< HEAD
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
=======
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
>>>>>>> eb2c7e2d293c84518066f2bcd809f1b0cabad201

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  passBack() {
    this.passEntry.emit(this._food);
    this.activeModal.close(this._food);
  }

}
