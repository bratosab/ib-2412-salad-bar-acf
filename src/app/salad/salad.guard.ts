import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

export const saladGuard: CanActivateFn = (route, state) => {
  const order = inject(OrderService)
  const store = inject<Store<{ app: AppState }>>(Store)
  const router = inject(Router)

  const app = store.selectSignal(state => state.app)

  if(app().name && app().tel) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
