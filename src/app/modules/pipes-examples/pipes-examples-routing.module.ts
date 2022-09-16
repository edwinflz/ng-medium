import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesExamplesComponent } from '@pipes-examples/container/pipes-examples.component';
import { childrenPipes } from '@pipes-examples/const';

const routes: Routes = [
  {
    path: '',
    component: PipesExamplesComponent,
    children: childrenPipes
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesExamplesRoutingModule { }
