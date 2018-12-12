import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/shared/models/customer';
import { Risk } from 'src/app/shared/enums/risk.enum';

const CUSTOMERS: Customer[] = [
  { name: 'Christian', creditLimit: 12700, risk: Risk.A, interestRate: 10 }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customersDisplayedColumns: string[] = ['Name', 'Credit Limit', 'Risk', 'Interest Rate'];
  customersDataSource = CUSTOMERS;

  private customers: Customer[];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.findAll().subscribe((customers: Customer[]) => this.customers = customers);
  }

}
