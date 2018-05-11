import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ReversePipe } from './shared/reverse.pipe';
import { FormsModule } from '@angular/forms'
import { AvailabilityComponent } from './shared/availability.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReversePipe,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
