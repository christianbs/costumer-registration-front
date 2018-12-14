import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = '/local/customer-registration/customer';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(customer: Customer) {
    return this.httpClient.post(this.url, customer);
  }

  findAll() {
    return this.httpClient.get(this.url);
  }

  delete(id: string) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
