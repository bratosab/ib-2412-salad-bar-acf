import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

export const saladGuard: CanActivateFn = (route, state) => {
  const order = inject(OrderService)
  const router = inject(Router)

  if(order.name() && order.tel()) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
