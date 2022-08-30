import { UserForLoginModel } from './../../models/userForLoginModel';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  users!:UserForLoginModel[]


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router,
    private messageService : MessageService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
    this.getUsers()
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
      //password: ['', Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")],
    });
  }
  login() {
    //console.log(this.loginForm.value.password )

    if(!this.loginForm.valid){
      this.messageService.add({severity:'warn', summary:'Add', detail:'There are missing fields.'});
      return;
    }
    let isMatchUserNameOrPassword = this.users.find(u=>(u.password == this.loginForm.value.password) && (u.userName == this.loginForm.value.userName) )

    if(!isMatchUserNameOrPassword){
      this.messageService.add({severity:'error', summary:'Error', detail:'Wrong username or password. Please try again.'});
      return;
    }
    this.authService.login(this.loginForm.value).subscribe((response) => {
      console.log(response, new Date().toISOString());
      // if (response.success) {
      //   this.authService.saveToken(response);
      // }
      this.router.navigateByUrl("/services-list");
    });
  }

  getUsers(){
    this.authService.getUsers().subscribe(data =>{
      this.users = data;
      console.warn(this.users)
    })
  }
}
