import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { AdminComponent } from './pages/admin/admin.component';

import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [FormComponent, ListComponent, AdminComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatDividerModule
  ]
})
export class CustomerModule { }
