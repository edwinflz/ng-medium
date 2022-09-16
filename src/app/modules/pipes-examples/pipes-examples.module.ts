import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material/material.module';
import { PipesModule } from '@app/pipes/pipes.module';
import { PipesExamplesRoutingModule } from './pipes-examples-routing.module';
import { PipesExamplesComponent } from './container/pipes-examples.component';
import { SafeDomComponent } from './components/safe-dom.component';

@NgModule({
  declarations: [
    PipesExamplesComponent,
    SafeDomComponent
  ],
  imports: [
    CommonModule,
    PipesExamplesRoutingModule,
    MaterialModule,
    PipesModule
  ]
})
export class PipesExamplesModule { }
