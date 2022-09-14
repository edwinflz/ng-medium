import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { ProfilerService } from '@interceptors-examples/services/profiler.service';
import { paths } from '@interceptors-examples/interface/const';

@Injectable()
export class ProfilerInterceptor implements HttpInterceptor {
  constructor(private profiler: ProfilerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.profiler) && !req.url.includes('users')) {
      return next.handle(req);
    }
    console.warn('ProfilerInterceptor');

    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(
        {
          // Succeeds when there is a response; ignore other events
          next: event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error: error => ok = 'failed'
        }
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"
               ${ok} in ${elapsed} ms.`;
        this.profiler.add(msg);
      })
    );
  }
}
