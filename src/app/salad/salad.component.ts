import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';
import { ToppingsComponent } from './toppings/toppings.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-salad',
    templateUrl: './salad.component.html',
    styleUrl: './salad.component.scss',
    standalone: true,
    imports: [ToppingsComponent, IngredientsComponent, AsyncPipe]
})
export class SaladComponent {
  order = inject(OrderService)
  saladService = inject(SaladService)

  // toppings: Topping[] = []
  toppings$ = this.saladService.getToppings()

  ngOnInit(): void {
    // this.saladService.getToppings().subscribe(t => {
    //   this.toppings = t
    // })
  }

  selectTopping(topping: Topping) {
    this.saladService.chooseTopping(topping)
  }

  removeTopping(id: number){
    this.saladService.removeTopping(id)
  }
}
