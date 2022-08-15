import { AuthService } from './../../../core/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etiya-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut();
  }
}
