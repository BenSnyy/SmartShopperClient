import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    adminButton: Boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    // adminButtoFn() {
    //     if (this.currentUser === 'administrator') {
    //         console.log(this.currentUser.username)
    //         return false;
    //     } else {
    //         return true;
    //     }
    // } 

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}