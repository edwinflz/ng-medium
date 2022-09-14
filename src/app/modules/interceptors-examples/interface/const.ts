import { AuthComponent } from "@interceptors-examples/components/auth.component";
import { CacheComponent } from "@interceptors-examples/components/cache.component";
import { ConvertComponent } from "@interceptors-examples/components/convert.component";
import { ErrorComponent } from "@interceptors-examples/components/error.component";
import { FakeComponent } from "@interceptors-examples/components/fake.component";
import { HeaderComponent } from "@interceptors-examples/components/header.component";
import { HttpsComponent } from "@interceptors-examples/components/https.component";
import { LoaderComponent } from "@interceptors-examples/components/loader.component";
import { NotifyComponent } from "@interceptors-examples/components/notify.component";
import { ProfilerComponent } from "@interceptors-examples/components/profiler.component";

export const paths = {
  auth: 'auth',
  cache: 'cache',
  fake: 'fake',
  error: 'error',
  profiler: 'profiler',
  notify: 'notify',
  header: 'header',
  convert: 'convert',
  loader: 'loader',
  https: 'https',
};


export const children = [
  { path: paths.auth, component: AuthComponent },
  { path: paths.cache, component: CacheComponent },
  { path: paths.convert, component: ConvertComponent },
  { path: paths.error, component: ErrorComponent },
  { path: paths.fake, component: FakeComponent },
  { path: paths.header, component: HeaderComponent },
  { path: paths.https, component: HttpsComponent },
  { path: paths.loader, component: LoaderComponent },
  { path: paths.profiler, component: ProfilerComponent },
  { path: paths.notify, component: NotifyComponent }
]
