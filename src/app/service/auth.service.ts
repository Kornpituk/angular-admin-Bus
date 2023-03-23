import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Role } from './role';

import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { Schedule } from './schedule';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiurlori='http://localhost:3000/user';
  apiurl = 'http://localhost:8060';

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  GetUserbyCode(id: any): Observable<User[]> {
    // console.log("GetUSerbyCode :"+this.http.get(this.apiurl + '/' + id));
    return this.http.get<User[]>(this.apiurl+"/user" + '/' + id);
  }

  GetUserbyUserName(id: any): Observable<User[]> {
    // console.log("GetUSerbyCode :"+this.http.get(this.apiurl + '/' + id));
    return this.http.get<User[]>(this.apiurl+"/user/name" + '/' + id);
  }

  GetallUsers(): Observable<User[]> {
    console.log("this.http.get<User[]>(this.apiurl)"+this.http.get<User[]>(this.apiurl));
    return this.http.get<User[]>(this.apiurl+"/users");
  }

  GetallEmployees(): Observable<Employee[]> {
    console.log("this.http.get<Employee[]>(this.apiurl)"+this.http.get<Employee[]>(this.apiurl));
    return this.http.get<Employee[]>(this.apiurl+"/employees");
  }

  GetallSchedules(): Observable<Schedule[]> {
    console.log("this.http.get<Schedule[]>(this.apiurl)"+this.http.get<Schedule[]>(this.apiurl));
    return this.http.get<Schedule[]>(this.apiurl+"/schedules");
  }

  GetallBuses(): Observable<Bus[]> {
    console.log("this.http.get<Bus[]>(this.apiurl)"+this.http.get<Bus[]>(this.apiurl));
    return this.http.get<Bus[]>(this.apiurl+"/buses");
  }



  Getall() {
    console.log(this.apiurl);
    return this.http.get(this.apiurl);
  }
  updateuser(id: any, inputdata: any) {
    return this.http.put(this.apiurl +"/user"+ '/' + id, inputdata);
  }

  // getuserrole(): Observable<Role[]> {
  //   console.log("this.http.get<Role[]>(this.apiurl + '/role')");
  //   return this.http.get<Role[]>(this.apiurl + '/role');
  // }

  getuserrole(){
    return this.http.get(this.apiurl + '/role');
  }

  testLoginSes(){
    return sessionStorage.setItem('user','admin');
  }

  isloggedin() {
    return sessionStorage.getItem('username') != null;
  }
  getrole() {
    console.log(sessionStorage.getItem('role'));
    return sessionStorage.getItem('role') != null
      ? sessionStorage.getItem('role')?.toString()
      : '';
  }

  getrole2(id: any) {
    return this.http.get(this.apiurl + '/role2/' + id);
  }
}
