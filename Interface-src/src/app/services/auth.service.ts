import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  userId: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
    .pipe(map(res => res.json()));

  }

  findUser(userId: String) {
    const headers = new Headers();
    return this.http.get('http://localhost:3000/users/' + userId, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAllUsers() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/index', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
   localStorage.setItem('id_token', token);
   localStorage.setItem('user', JSON.stringify(user));
   this.authToken = token;
   this.user = user;
 }

 loadToken() {
   const token = localStorage.getItem('id_token');
   this.authToken = token;
 }

loggedIn() {
   const helper = new JwtHelperService();
   return !helper.isTokenExpired(this.authToken);
  }

 logout() {
   this.authToken = null;
   this.user = null;
   localStorage.clear();
 }

 isAdmin() {
  if (this.user.permission === 'admin') {
    return true;

  } else {
    return false;
  }
  }

}
