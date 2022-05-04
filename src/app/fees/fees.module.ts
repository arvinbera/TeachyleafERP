import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FeesRoutingModule } from './fees-routing.module';
import { ClasspaymentstructureComponent } from './classpaymentstructure/classpaymentstructure.component';
import { ComponentComponent } from './component/component.component';
import { CounterComponent } from './counter/counter.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ViewpaymentmodeComponent } from './viewpaymentmode/viewpaymentmode.component';
import { FeesstructureComponent } from './feesstructure/feesstructure.component';
import { FeesstructurecompComponent } from './feesstructurecomp/feesstructurecomp.component';
import { AdmissionfeeComponent } from './admissionfee/admissionfee.component';

@NgModule({
  declarations: [
    ClasspaymentstructureComponent,
    ComponentComponent,
    CounterComponent,
    PaymentmodeComponent,
    ViewpaymentmodeComponent,
    FeesstructureComponent,
    FeesstructurecompComponent,
    AdmissionfeeComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    FormsModule
  ],
  providers: [BsDatepickerConfig],
})
export class FeesModule { }
