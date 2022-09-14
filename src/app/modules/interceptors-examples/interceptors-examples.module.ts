import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material/material.module';

import { InterceptorsExamplesRoutingModule } from './interceptors-examples-routing.module';
import { InterceptorsExamplesComponent } from './container/interceptors-examples.component';
import { AuthComponent } from './components/auth.component';
import { CacheComponent } from './components/cache.component';
import { ConvertComponent } from './components/convert.component';
import { ErrorComponent } from './components/error.component';
import { HeaderComponent } from './components/header.component';
import { HttpsComponent } from './components/https.component';
import { LoaderComponent } from './components/loader.component';
import { NotifyComponent } from './components/notify.component';
import { ProfilerComponent } from './components/profiler.component';
import { FakeComponent } from './components/fake.component';
import { ApisCallService } from './services/apis-call.service';

@NgModule({
  declarations: [
    InterceptorsExamplesComponent,
    AuthComponent,
    CacheComponent,
    ConvertComponent,
    ErrorComponent,
    HeaderComponent,
    HttpsComponent,
    LoaderComponent,
    NotifyComponent,
    ProfilerComponent,
    FakeComponent,
  ],
  imports: [CommonModule, InterceptorsExamplesRoutingModule, MaterialModule],
  providers: [ApisCallService],
})
export class InterceptorsExamplesModule {}
