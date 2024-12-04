import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetToppings, SaveToppings } from './salad.actions';
import { exhaustMap, map } from 'rxjs';
import { SaladService } from '../../services/salad.service';

export const loadToppings = createEffect(
  (actions$ = inject(Actions), saladService = inject(SaladService)) => {
    return actions$.pipe(
      ofType(GetToppings),
      exhaustMap(() => {
        return saladService
          .getToppings()
          .pipe(map((toppings) => SaveToppings({ list: toppings })));
      })
    );
  },
  { functional: true }
);
