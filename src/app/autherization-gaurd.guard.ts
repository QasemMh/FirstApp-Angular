import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutherizationGaurdGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');

    if (token == null) {
      this.toastr.error('You are not logged in');
      this.router.navigate(['/login']);
      return false;
    }

    if (state.url.indexOf('admin') > 0) {
      const decoded = JSON.parse(<string>localStorage.getItem('userData'));
      if (decoded.role == '1') {
        return true;
      } else {
        this.toastr.error('You are not authorized to access this page');
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      return false;
    }
  }
}
