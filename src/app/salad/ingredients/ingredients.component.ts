import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsComponent {
  @Input() ingredients: Topping[] = [];
  @Output() removeTopping = new EventEmitter<number>();

  removeIngredient(id: number) {
    this.removeTopping.emit(id);
  }

  totalPrice() {
    console.log("ingredients : totalPrice")
    return this.ingredients.reduce((total, topping) => {
      return total + topping.price;
    }, 0);
  }
}
