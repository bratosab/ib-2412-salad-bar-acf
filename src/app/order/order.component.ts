import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Store } from '@ngrx/store';
import { SetName, SetTel } from '../store/app.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class OrderComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private order = inject(OrderService);
  private store = inject(Store);

  orderForm = this.fb.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
  });

  startOrder() {
    if (this.orderForm.valid) {
      // this.order.name.set(this.orderForm.value.name as string)
      // this.order.tel.set(this.orderForm.value.tel as string)
      this.store.dispatch(
        SetName({ name: this.orderForm.value.name as string })
      );
      this.store.dispatch(SetTel({ tel: this.orderForm.value.tel as string }));
      this.router.navigate(['salad']);
    }
  }
}
