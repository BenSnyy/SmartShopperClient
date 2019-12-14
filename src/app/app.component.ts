import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html', 
    styleUrls:['./app.component.css'
] })

export class AppComponent {
    currentUser: User;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private authenticationService: AuthenticationService,
        
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }















    // openUpdateFood() {
    //     const modalRef = this.modalService.open(UpdateFoodComponent);
    //     modalRef.componentInstance.id = 10; // should be the id

    //     modalRef.result.then((result) => {
    //       console.log(result);
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // }


}