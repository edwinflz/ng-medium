import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { children } from '@interceptors-examples/interface/const';

import { InterceptorsExamplesComponent } from './container/interceptors-examples.component';

const routes: Routes = [
  {
    path: '',
    component: InterceptorsExamplesComponent,
    children: children
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterceptorsExamplesRoutingModule { }
