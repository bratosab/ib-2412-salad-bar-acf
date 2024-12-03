import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root',
})
export class SaladService {
  constructor(private http: HttpClient) {}

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings');
  }

  private chosenToppingsList = signal<Topping[]>([]);
  totalPrice = computed(() => {
    console.log('computed : totalPrice');
    return this.chosenToppings().reduce((total, topping) => {
      return total + topping.price;
    }, 0);
  });

  // Getter for the toppings signal
  get chosenToppings() {
    return this.chosenToppingsList.asReadonly();
  }

  // Add a new topping to list
  chooseTopping(topping: Topping) {
    // signal.update(currentValue => newValue)
    this.chosenToppingsList.update((toppings) => [...toppings, topping]);
  }

  // Remove a topping
  removeTopping(id: number) {
    // signal.update(currentValue => newValue)
    this.chosenToppingsList.update((toppings) =>
      toppings.filter((topping) => topping.id !== id)
    );
  }
}
