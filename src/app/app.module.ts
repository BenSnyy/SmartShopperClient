import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component'; 
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

const material = [
  MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    AppRoutingModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
