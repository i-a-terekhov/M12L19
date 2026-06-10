import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.pattern(/^[А-Я][а-я]+\s*$/), Validators.required]),
    lastName: new FormControl('', [Validators.pattern(/^[А-Я][а-я]+\s*$/), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/), Validators.required]),
    agree: new FormControl(false, [Validators.required]),
  })

  constructor() {  }

  ngOnInit() {
  }

}
