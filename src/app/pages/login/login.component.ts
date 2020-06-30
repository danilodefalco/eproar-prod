import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.minLength(4),
          Validators.required
        ])],
      password: [
        '',
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(16),
          Validators.required
        ])]
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.afAuth.signInWithEmailAndPassword(
      this.form.value.email,
      this.form.value.password
    );
  }
}
