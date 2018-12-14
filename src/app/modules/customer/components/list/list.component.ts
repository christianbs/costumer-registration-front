import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/shared/models/customer';
import { Risk } from 'src/app/shared/enums/risk.enum';

const CUSTOMERS: Customer[] = [
  { id: null, name: 'Christian', creditLimit: 12700, risk: Risk.A, interestRate: 10 }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() eventEditCustomer = new EventEmitter<Customer>();
  customersDisplayedColumns: string[] = ['Name', 'Credit Limit', 'Risk', 'Interest Rate', 'Edit', 'Delete'];
  customersDataSource: Customer[] = [];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.findCustomers();
  }

  findCustomers() {
    this.customerService.findAll().subscribe((customers: Customer[]) => this.customersDataSource = customers);
  }

  edit(customer: Customer) {
    this.eventEditCustomer.next(JSON.parse(JSON.stringify(customer)));
  }

  delete(id: string) {
    this.customerService.delete(id).subscribe(data => this.findCustomers());
  }

}
