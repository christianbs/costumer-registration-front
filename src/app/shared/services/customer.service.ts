import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  save(customer: Customer) {
    alert(JSON.stringify(customer));
  }

  findAll() {
    const url = '';
    return this.httpClient.get(url);
  }
}
