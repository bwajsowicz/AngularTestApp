import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { CustomerService } from './sandbox/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CustomerService]   
})
export class AppComponent {
  title = 'app';
}
