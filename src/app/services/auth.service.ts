import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  // private _loggedIn = new BehaviorSubject<boolean>(false);
  // isLoggedIn = this._loggedIn.asObservable()
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  login(value: boolean) {
    this.isLoggedIn.next(value);
    console.log('Login event!');
  }

  register(user: User): Observable<User> {
    console.log('test');
    return this.httpClient.post<User>('http://localhost:8080/auth/register', {
      username: user.email,
      name: user.firstName,
      surname: user.lastName,
      password: user.password,
      city: user.city,
    });
  }

  confirmAccount(regKey: string) {
    alert('Doing submit to path http://localhost:8080/auth/register/' + regKey);
    return this.httpClient.get<void>(
      'http://localhost:8080/auth/register/' + regKey
    );
  }

  logout() {
    this.isLoggedIn.next(false);
    console.log('Logout event!');
  }
}
