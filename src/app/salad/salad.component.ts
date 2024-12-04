import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { SaladService } from '../services/salad.service';
import { Topping } from '../models/topping.model';
import { ToppingsComponent } from './toppings/toppings.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { GetToppings } from './store/salad.actions';
import { SaladState } from './store/salad.reducer';

@Component({
    selector: 'app-salad',
    templateUrl: './salad.component.html',
    styleUrl: './salad.component.scss',
    standalone: true,
    imports: [ToppingsComponent, IngredientsComponent, AsyncPipe]
})
export class SaladComponent {
  order = inject(OrderService)
  store = inject<Store<{ app: AppState, salad: SaladState }>>(Store)
  saladService = inject(SaladService)

  name = this.store.selectSignal(state => state.app.name)
  toppings$ = this.store.select(state => state.salad.toppings)

  // toppings: Topping[] = []
  // toppings$ = this.saladService.getToppings()

  ngOnInit(): void {
    this.store.dispatch(GetToppings())
  }

  selectTopping(topping: Topping) {
    this.saladService.chooseTopping(topping)
  }

  removeTopping(id: number){
    this.saladService.removeTopping(id)
  }
}
