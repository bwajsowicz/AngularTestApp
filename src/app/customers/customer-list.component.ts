import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../sandbox/customer';
import { CustomerService } from '../sandbox/customer.service';

@Component({
  selector: 'app-customer-list.component',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[];
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomers().subscribe(customers => {
    this.customers = customers;
    });
  }
}