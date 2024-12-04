import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { saladReducer } from './salad/store/salad.reducer';
import { loadToppings } from './salad/store/salad.effects';

export const config: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([...appRoutes]),
    provideStore({
      router: routerReducer,
      app: appReducer,
      salad: saladReducer,
    }),
    provideEffects({ loadToppings }),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
