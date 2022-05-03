import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'injection/component',
    pathMatch: 'full'
  },
  {
    path: 'injection/component',
    loadChildren: () => import('./modules/injection-component/injection-component.module').then(m => m.InjectionComponentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
