import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics.component';

const routes: Routes = [
  {
    path: '',
    component: AngularBasicsComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./containers/user/user.module').then((m) => m.UserModule),
        // canActivateChild: [IsLoggedInGuard],
        // canLoad: [IsLoggedInGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBasicsRoutingModule { }
