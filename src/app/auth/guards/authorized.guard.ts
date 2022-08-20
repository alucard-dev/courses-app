import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStateFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  constructor(private authStateFacade: AuthStateFacade, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authStateFacade.isUserAuthorized$.pipe(
      map((value) => {
        if (value) {
          return true;
        }
        return this.router.parseUrl('/login');
      })
    );
  }
}
