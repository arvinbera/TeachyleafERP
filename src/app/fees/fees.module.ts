import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { FeesRoutingModule } from './fees-routing.module';
import { ClasspaymentstructureComponent } from './classpaymentstructure/classpaymentstructure.component';
import { ComponentComponent } from './component/component.component';
import { CounterComponent } from './counter/counter.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    ClasspaymentstructureComponent,
    ComponentComponent,
    CounterComponent,
    PaymentmodeComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  providers: [BsDatepickerConfig],
})
export class FeesModule { }
