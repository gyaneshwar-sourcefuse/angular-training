import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    return next.handle(req).pipe(
      tap({
        next: (event) => (ok = event instanceof HttpResponse ? 'success' : ''),
        error: (error) => (ok = 'fail'),
      }),
      finalize(() => {
        const elapsed = Date.now() - started;
        const message = `[CustomInterceptor] ${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
        console.log(message);
      })
    );
  }
}
