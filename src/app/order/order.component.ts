import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)

  orderForm = this.fb.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
  })

  startOrder() {
    if(this.orderForm.valid) {
      this.router.navigate(['salad'])
    }
  }
}
