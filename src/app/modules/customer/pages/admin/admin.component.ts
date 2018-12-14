import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { FormComponent } from '../../components/form/form.component';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;
  @ViewChild(ListComponent) listComponent: ListComponent;

  constructor() { }

  ngOnInit() {
  }

  updateTable() {
    this.listComponent.findCustomers();
  }
  editCustomer($event) {
    this.formComponent.editCustomer($event);
  }

}
