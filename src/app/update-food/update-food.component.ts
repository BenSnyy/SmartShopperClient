import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

>>>>>>> 5dea41ef2f0aff52512caeedeff7eacf8e0cda8d

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  closeResult: string;
  

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

>>>>>>> 5dea41ef2f0aff52512caeedeff7eacf8e0cda8d

  ngOnInit() {
  }

}
