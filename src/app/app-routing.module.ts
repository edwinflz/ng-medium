import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'injection/component',
    loadChildren: () => import('@modules/injection-component/injection-component.module').then(m => m.InjectionComponentModule),
  },
  {
    path: 'reactive/forms/advanced',
    loadChildren: () => import('@modules/reactive-form-advanced/reactive-form-advanced.module').then(m => m.ReactiveFormAdvancedModule),
  },
  {
    path: 'interceptors/examples',
    loadChildren: () => import('@modules/interceptors-examples/interceptors-examples.module').then(m => m.InterceptorsExamplesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
