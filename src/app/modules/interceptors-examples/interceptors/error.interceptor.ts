import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { paths } from '@interceptors-examples/interface/const';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.error)) {
      return next.handle(req);
    }
    console.warn('ErrorInterceptor');

    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          // 401 handled in auth.interceptor
          this.toastr.error(error.message);
        }
        return throwError(() => error);
      })
    );
  }

}
