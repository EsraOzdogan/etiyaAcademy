import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      //password: ['', Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")],
    });
  }
  login() {
    if(!this.loginForm.valid){
      return
    }
    this.authService.login(this.loginForm.value).subscribe((response) => {
      console.log(response, new Date().toISOString());
      // if (response.success) {
      //   this.authService.saveToken(response);
      // }
    });
  }
}
