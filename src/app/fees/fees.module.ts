import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { FeesRoutingModule } from './fees-routing.module';
import { ClasspaymentstructureComponent } from './classpaymentstructure/classpaymentstructure.component';
import { ComponentComponent } from './component/component.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    ClasspaymentstructureComponent,
    ComponentComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeesModule { }
