import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { Risk } from 'src/app/shared/enums/risk.enum';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild(NgForm) customerForm = NgForm;
  @Output() eventUpdateTable = new EventEmitter();
  private Risk = Risk;
  private customer: Customer;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.newCustomer();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.customerService.save(this.customer).subscribe(data => {
        this.newCustomer();
        this.updateTable();
        this.resetValidation(form);
      });
    }
  }

  newCustomer() {
    this.customer = new Customer(null, '', null, null, null);
  }

  updateTable() {
    this.eventUpdateTable.next();
  }

  resetValidation(form: NgForm) {
    form.resetForm();
  }

  editCustomer(customer: Customer) {
    this.customer = customer;
  }

}
