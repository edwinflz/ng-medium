import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [BreakPointsService]
})
export class ReactiveFormAdvancedModule { }
