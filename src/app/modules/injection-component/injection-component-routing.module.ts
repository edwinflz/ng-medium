import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InjectionComponentComponent } from './container/injection-component.component';

const routes: Routes = [
  {
    path: '',
    component: InjectionComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectionComponentRoutingModule { }
