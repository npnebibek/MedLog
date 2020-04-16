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
  message: any;
  userId: String;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
    .pipe(map(res => res.json()));

  }

  findUser(userId: String) {
    const headers = new Headers();
    return this.http.get('users/' + userId, {headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteUser(userId: String) {
    const headers = new Headers();
    return this.http.delete('users/' + userId, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAllUsers() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/users', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getAllMessages() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/index', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
    .pipe(map(res => res.json()));
  }

  newMessage(message) {
    const headers = new Headers();
    this.getId();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/' + this.userId + '/messages', message, {headers: headers})
    .pipe(map(res => res.json()));
  }

  registerPatient(patient) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/registerPatient', patient, {headers: headers})
    .pipe(map(res => res.json()));
  }

  newAppointment(appointment) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/newAppointment', appointment, {headers: headers})
    .pipe(map(res => res.json()));
  }

  allAppointments () {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/allAppointments', {headers: headers})
    .pipe(map(res => res.json()));
  }

  allPatientsName () {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/allPatients', {headers: headers})
    .pipe(map(res => res.json()));
  }

  newReport (report) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/newReport', report, {headers: headers})
    .pipe(map(res => res.json()));

  }

  allReports () {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/allReports', {headers: headers})
    .pipe(map(res => res.json()));
  }



  storeUserData(token, user, id) {
   localStorage.setItem('id_token', token);
   localStorage.setItem('user', JSON.stringify(user));
   localStorage.setItem('id', id);
   this.authToken = token;
   this.user = user;
   this.userId = id;
 }

 getId() {
  this.userId = localStorage.getItem('id');
  console.log(this.userId);
 }

 loadToken() {
   const token = localStorage.getItem('id_token');
   this.authToken = token;
   console.log(this.authToken);
 }

loggedIn() {
   const helper = new JwtHelperService();
   if (!this.authToken) {
     return false;
     } else {
   return !helper.isTokenExpired(this.authToken); }
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

  isDoctor() {
    if (this.user.permission === 'doctor') {
      return true;
    } else {
      return false;
    }
  }

}
