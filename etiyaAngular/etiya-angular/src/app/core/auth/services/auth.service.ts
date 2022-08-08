import { removeTokenUserModel, setTokenUserModel } from './../store/actions/auth.actions';
import { TokenUserModel } from './../models/tokenUserModel';
import { LocalStorageService } from './../../storage/services/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageResultModel } from '../../models/messageResultModel';
import { UserForLoginModel } from '../models/userForLoginModel';
import { UserLoginResponseModel } from '../models/userLoginResponseModel';
import { Store } from '@ngrx/store';
import { AuthStates } from '../store/auth.reducer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store      //tokenUserModel$ --> sondaki dolar isareti Observable özellik dönecek demek, Observable bize TokenUserModel veya undefined dönecek
    .select(state => state.appAuth)               //ilgili state'i sec
    .pipe(map(state => state.tokenUserModel));     //state'deki tokenUserModel'i aldık


  apicontrollerUrl:string = `${environment.apiUrl}/auth`;


  constructor(
    private httpClient:HttpClient,
    private localStrorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService,
    private store: Store<AuthStates>,
    private router: Router
    ) { }

  login(userForLoginModel:UserForLoginModel): Observable<UserLoginResponseModel>{
    return this.httpClient.post<UserLoginResponseModel>(`${this.apicontrollerUrl}/login`,userForLoginModel)
  }

  saveAuth(userLoginResponseModel:UserLoginResponseModel){
    this.localStrorageService.set('token',userLoginResponseModel.access_token);
    console.log(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()))
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));    //token'ı decode ediyoruz
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
    this.localStrorageService.remove('token')
    this.removeTokenUserModel();
    this.router.navigateByUrl('');
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel })); // tokenUserModel -> tokenUserModel:tokenUserModel ile aynı
  }

  removeTokenUserModel(){
    this.store.dispatch(removeTokenUserModel());
  }

}

export function tokenGetter(){         //login-guard tokenGetter function
  return localStorage.getItem('token')
}
