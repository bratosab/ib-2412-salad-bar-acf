import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private order = inject(OrderService)

  orderForm = this.fb.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
  })

  startOrder() {
    if(this.orderForm.valid) {
      this.order.name.set(this.orderForm.value.name as string)
      this.order.tel.set(this.orderForm.value.tel as string)
      this.router.navigate(['salad'])
    }
  }
}
