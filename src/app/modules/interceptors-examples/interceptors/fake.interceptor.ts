import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { paths } from '@interceptors-examples/interface/const';

@Injectable()
export class FakeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.fake)) {
      return next.handle(req);
    }
    console.warn('FakeInterceptor');

    const body = { firstName: 'Mock', lastName: 'Faker' };
    return of(new HttpResponse({ status: 200, body: body }));
  }
}
