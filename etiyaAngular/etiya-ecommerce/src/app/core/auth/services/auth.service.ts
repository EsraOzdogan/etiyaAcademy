import { LocalStorageService } from './../../storage/services/local-storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserForLogin } from '../models/userForLogin';
import { UserLoginResponse } from '../models/userLoginResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(userForLoginModel: UserForLogin): Observable<UserLoginResponse> {
    return this.httpClient.post<UserLoginResponse>(
      this.apiControllerUrl + '/login',
      userForLoginModel
    );
  }
  saveToken(userLoginResponse: UserLoginResponse) {
    this.localStorageService.set('token', userLoginResponse.access_token);
  }
}
