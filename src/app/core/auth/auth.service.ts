import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {LoginResponseType} from "../../../types/login-response.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponseType> {
    return this.http.post<LoginResponseType>(environment.apiHost + 'login', {
      email,
      password,
    });
  }
}
