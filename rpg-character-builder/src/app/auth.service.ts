export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject(<boolean>false);

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {
    this.users = [
      {
        empId: 1007,
        email: 'rpg@builder.com',
        password: 'Password123',
      },
      {
        empId: 1008,
        email: 'dungeonmaster@dnd.com',
        password: 'Hello999',
      },
      {
        empId: 1009,
        email: 'iloverpg@yay.com',
        password: 'angulaR1',
      }
    ];
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
