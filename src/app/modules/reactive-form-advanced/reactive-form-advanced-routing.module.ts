import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormAdvancedComponent } from './container/reactive-form-advanced.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormAdvancedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormAdvancedRoutingModule { }
