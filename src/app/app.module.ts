
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FooterComponent } from './footer/footer.component'; 
import { HeaderComponent } from './header/header.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';

import { DatabaseService } from './_services/database.service';
import { AdminComponent } from './admin/admin.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';
import { DisplayFoodComponent } from './display-food/display-food.component';
import { DisplayShoppingComponent } from './display-shopping/display-shopping.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { UpdateShoppingComponent } from './update-shopping/update-shopping.component';
//import { ModalContentComponent } from './modal-content/modal-content.component';
//import { ModalContainerComponent } from './modal-container/modal-container.component'
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalContainerComponent } from './modal-container/modal-container.component'
import { CommonModule } from '@angular/common';

// import { FoodSearchComponent } from './food-search/food-search.component';

const material = [
  MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatButtonModule
];

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        material,
        NgbModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        AboutComponent,
        routingComponents,
        AlertComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        CreateFoodComponent,
        DisplayFoodComponent,
        CreateShoppingComponent,
        DisplayShoppingComponent,
        AdminComponent,
        UpdateFoodComponent,
        UpdateShoppingComponent,
        //ModalContentComponent,
        //ModalContainerComponent,
        // FoodSearchComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        DatabaseService,
        HttpClient
    ],
    bootstrap: [AppComponent],
    entryComponents: [
      UpdateFoodComponent,
      UpdateShoppingComponent,
      //ModalContentComponent,
      //ModalContainerComponent,
    ]
  })

export class AppModule { };