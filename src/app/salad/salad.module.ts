import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { KitchenModule } from '../kitchen/kitchen.module';
import { IngredientsComponent } from './ingredients/ingredients.component';


@NgModule({
  declarations: [
    SaladComponent,
    ToppingsComponent,
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule
  ]
})
export class SaladModule { }
