import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm!: FormGroup;
  constructor(
    //private router: Router,
    //private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        city: ['', Validators.required],
        phoneNumber: ['', [Validators.required]],
      },
      { validators: confirmPasswordValidator }
    );
  }

  get regForm() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(
      'Submit Register event with valid form',
      this.registerForm.value
    );
    // UPDATE USER STATE
    // SEND POST REQUEST FOR USER

    //this.authService.register();
    //this.router.navigate(['/home']);
  }
}
