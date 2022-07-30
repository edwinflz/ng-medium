import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material/material.module';
import { ReactiveFormAdvancedRoutingModule } from './reactive-form-advanced-routing.module';
import { ReactiveFormAdvancedComponent } from './container/reactive-form-advanced.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { BreakPointsService } from './service/break-points.service';
import { ContainerErrorsFormComponent } from './components/container-errors-form/container-errors-form.component';
import { MessageErrorsFormComponent } from './components/message-errors-form/message-errors-form.component';

@NgModule({
  declarations: [
    ReactiveFormAdvancedComponent,
    ReactiveFormComponent,
    ContainerErrorsFormComponent,
    MessageErrorsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormAdvancedRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [BreakPointsService]
})
export class ReactiveFormAdvancedModule { }
