import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ReversePipe } from './shared/reverse.pipe';
import { FormsModule } from '@angular/forms'
import { AvailabilityComponent } from './shared/availability.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CustomerListComponent } from './customers/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReversePipe,
    AvailabilityComponent,
    WelcomeComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'customers', component: CustomerListComponent},      
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    [MatButtonModule, MatDividerModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatCardModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
