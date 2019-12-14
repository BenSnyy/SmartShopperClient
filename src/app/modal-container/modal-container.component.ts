import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  public _food = {
    id: 10,
    food: 'Cookies',
    quantity: 26,
    expiration: 2020/12/24,
    brand: 'RB',
  }

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit() {
  }

//   openModal() {
//     const modalRef = this.modalService.open(ModalContentComponent);
//     modalRef.componentInstance._food = this._food;
//     modalRef.result.then((result) => {
//       if (result) {
//         console.log(result);
        

//       }
//     });
//     // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
//     //   console.log(receivedEntry);
//     // })
//   }

}