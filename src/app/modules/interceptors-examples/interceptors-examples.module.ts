import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorsExamplesRoutingModule } from './interceptors-examples-routing.module';
import { InterceptorsExamplesComponent } from './container/interceptors-examples.component';


@NgModule({
  declarations: [
    InterceptorsExamplesComponent
  ],
  imports: [
    CommonModule,
    InterceptorsExamplesRoutingModule
  ]
})
export class InterceptorsExamplesModule { }
