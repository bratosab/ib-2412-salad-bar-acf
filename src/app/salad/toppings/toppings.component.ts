import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-toppings',
    templateUrl: './toppings.component.html',
    styleUrl: './toppings.component.scss',
    standalone: true,
    imports: [NgFor, CurrencyPipe]
})
export class ToppingsComponent {
  @Input()
  toppings: Topping[] = [];

  @Output()
  selectTopping = new EventEmitter<Topping>()

  chooseTopping(event: Topping) {
    const topping = event as Topping
    this.selectTopping.emit(topping)
  }
}
