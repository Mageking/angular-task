import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitError = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && (this.form.get(field).touched || this.submitError);
  }

  async onSubmit() {
    const {
      password,
      username
    } = this.form.value;

    this.loading = true;

    try {
      await this.authService.login(username, password);
      this.loading = false;
      this.router.navigate(['/dashboard']);
    } catch (err) {
      this.loading = false;
      this.submitError = true;
    }
  }
}
