import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { Risk } from 'src/app/shared/enums/risk.enum';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private Risk = Risk;
  private customer: Customer;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customer = new Customer('', null, null, null);
  }

  onSubmit() {
    this.customerService.save(this.customer);
  }

}
