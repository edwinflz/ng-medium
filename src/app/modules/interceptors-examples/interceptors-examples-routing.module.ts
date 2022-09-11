import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterceptorsExamplesComponent } from './container/interceptors-examples.component';

const routes: Routes = [
  {
    path: '',
    component: InterceptorsExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterceptorsExamplesRoutingModule { }
