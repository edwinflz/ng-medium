import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material/material.module';
import { FormExtensionsModule } from '@angular-basics/components/form-extensions/form-extensions.module';
import { UserRoutingModule } from './user-routing.module';

import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ChangeUsernameComponent } from './profile/change-username/change-username.component';
import { PhonesComponent } from './profile/phones/phones.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    ChangeUsernameComponent,
    PhonesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormExtensionsModule,
  ]
})
export class UserModule { }
