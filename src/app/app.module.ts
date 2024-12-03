import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaladModule } from './salad/salad.module';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SaladModule,
        ReactiveFormsModule,
        OrderComponent
    ],
    providers: [
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
