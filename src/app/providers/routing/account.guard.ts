import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateService } from '../state.service';

@Injectable({ providedIn: 'root' })
export class AccountGuard implements CanActivate {

    constructor(private stateService: StateService) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.stateService.select(state => state.signedIn);
    }
}
