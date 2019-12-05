
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';

import { CreateFoodComponent } from './create-food/create-food.component';
import { DisplayFoodComponent } from './display-food/display-food.component';
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';
import { DisplayShoppingComponent } from './display-shopping/display-shopping.component';

const material = [
  MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatButtonModule
];

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        appRoutingModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
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
        AboutComponent,
        routingComponents,
        CreateFoodComponent,
        DisplayFoodComponent,
        CreateShoppingComponent,
        DisplayShoppingComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
  })

export class AppModule { };