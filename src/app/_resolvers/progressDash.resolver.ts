import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import {User} from '../_models/user';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from '../Services/user.service';
import { AlertifyService } from '../Services/alertify.service';
import { AuthService } from '../Services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ProgressDashResolver implements Resolve<User> {
    constructor(private userService: UserService,
        private router: Router, private alertify: AlertifyService) {}
     resolve(route: ActivatedRouteSnapshot): Observable<User> {
            return this.userService.getUser(JSON.parse(localStorage.getItem('user')).id).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving your data');
                    return of(null);
                })
            );
    }
}