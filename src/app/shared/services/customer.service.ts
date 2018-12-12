import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  save(customer: Customer) {
    alert(JSON.stringify(customer));
  }
}
