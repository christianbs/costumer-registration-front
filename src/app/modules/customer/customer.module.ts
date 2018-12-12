import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomerRoutingModule } from './customer-routing.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { AdminComponent } from './pages/admin/admin.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [FormComponent, ListComponent, AdminComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    CustomerRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class CustomerModule { }
