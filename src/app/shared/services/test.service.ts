import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponseType} from "../../../types/login-response.type";
import {SignupResponseType} from "../../../types/signup-response.type";
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {QuizListType} from "../../../types/quiz-list.type";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTests(): Observable<QuizListType[]> {
    return this.http.get<QuizListType[]>(environment.apiHost + 'tests');
  }

}
