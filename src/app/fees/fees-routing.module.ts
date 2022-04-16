import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasspaymentstructureComponent } from './classpaymentstructure/classpaymentstructure.component';
import { ComponentComponent } from './component/component.component';
import { CounterComponent } from './counter/counter.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
