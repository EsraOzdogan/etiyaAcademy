import { LocalStorageService } from './../../storage/services/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageResultModel } from '../../models/messageResultModel';
import { UserForLoginModel } from '../models/userForLoginModel';
import { UserLoginResponseModel } from '../models/userLoginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apicontrollerUrl:string = `${environment.apiUrl}/auth`;


  constructor(
    private httpClient:HttpClient,
    private localStrorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService) { }

  login(userForLoginModel:UserForLoginModel): Observable<UserLoginResponseModel>{
    return this.httpClient.post<UserLoginResponseModel>(`${this.apicontrollerUrl}/login`,userForLoginModel)
  }

  saveAuth(userLoginResponseModel:UserLoginResponseModel){
    this.localStrorageService.set('token',userLoginResponseModel.access_token)
  }

  test():Observable<MessageResultModel>{  //MessageResultModel 'i dönderiyor
    return this.httpClient.get<MessageResultModel>(`${this.apicontrollerUrl}/test`)
  }

  get isAuthhenticated(): boolean{        //toke yoksa ve son tarihi bittiyse false, değilse true
    if(!this.jwtHelperService.tokenGetter()) return false;       //jwtHelperService'deki hazır tokernGetter func ile token alma duruma göre false döndürme
    if(this.jwtHelperService.isTokenExpired()) return false;     //jwtHelperService'deki hazır isTokenExpired dunc ile token son kullanı tarihini alma duruma göre false döndürme
    return true;
  }

  logOut(){
    return this.localStrorageService.remove('token')
  }
}

export function tokenGetter(){         //login-guard tokenGetter function
  return localStorage.getItem('token')
}
