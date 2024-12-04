import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { SaladComponent } from './salad/salad.component';
import { saladGuard } from './salad/salad.guard';

export const appRoutes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'salad', component: SaladComponent, canActivate: [saladGuard] },
  // {
  //   path: 'kitchen',
  //   loadChildren: () =>
  //     import('./kitchen/kitchen.module').then((m) => m.KitchenModule),
  // },
  {
    path: 'kitchen',
    loadComponent: () =>
      import('./kitchen/kitchen.component').then((c) => c.KitchenComponent),
  },
];
