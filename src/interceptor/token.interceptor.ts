import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');


    //try withou if and else
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
