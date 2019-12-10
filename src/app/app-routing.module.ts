import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CreateFoodComponent } from './create-food/create-food.component'
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'food', component: CreateFoodComponent },
    { path: 'shopping', component: CreateShoppingComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, CreateFoodComponent, CreateShoppingComponent, HomeComponent, LoginComponent, RegisterComponent]