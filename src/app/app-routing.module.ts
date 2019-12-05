import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CreateFoodComponent } from './create-food/create-food.component'
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'food', component: CreateFoodComponent },
    { path: 'shopping', component: CreateShoppingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, CreateFoodComponent]