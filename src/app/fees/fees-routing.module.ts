import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasspaymentstructureComponent } from './classpaymentstructure/classpaymentstructure.component';
import { ComponentComponent } from './component/component.component';
import { CounterComponent } from './counter/counter.component';
import { FeesstructureComponent } from './feesstructure/feesstructure.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { ViewpaymentmodeComponent } from './viewpaymentmode/viewpaymentmode.component';

const routes: Routes = [
  {
    path:"component",
    component:ComponentComponent
  },
  {
    path:"structure",
    component:ClasspaymentstructureComponent
  },
  {
    path:"counter",
    component:CounterComponent
  },
  {
    path:"paymentmode/:id/:session_id",
    component:PaymentmodeComponent
  },
  {
    path:"viewpaymentmode/:class_id/:session_id",
    component:ViewpaymentmodeComponent
  },
  {
    path:"feesstructure/:class_id/:session_id/:structure_name",
    component:FeesstructureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
