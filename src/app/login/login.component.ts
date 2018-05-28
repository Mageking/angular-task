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

  async onSubmit() {
    const {
      password,
      username
    } = this.form.value;

    // @todo show loading gif or something

    try {
      await this.authService.login(username, password);
      this.router.navigate(['/dashboard']);
    } catch (err) {
      // @todo show error
    }
  }
}
