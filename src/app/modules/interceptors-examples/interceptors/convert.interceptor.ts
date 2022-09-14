import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { camelCase, mapKeys } from "lodash";

@Injectable()
export class ConvertInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("comments")) {
      return next.handle(req);
    }
    console.warn("ConvertInterceptor");

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
          const modEvent = event.clone({ body: camelCaseObject });
          return modEvent;
        }
        return event;
      })
    );
  }
}
