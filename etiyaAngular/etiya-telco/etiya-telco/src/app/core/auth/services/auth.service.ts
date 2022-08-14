import { removeTokenUserModel, setTokenUserModel } from './../store/actions/auth.actions';
import { TokenUserModel } from './../models/tokenUserModel';
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
import { LocalStorageService } from '../../storage/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
    .select(state => state.appAuth)
    .pipe(map(state => state.tokenUserModel));


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

  saveToken(userLoginResponseModel:UserLoginResponseModel){
    this.localStrorageService.set('token',userLoginResponseModel.access_token);
    console.log(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()))
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));    //token'ı decode ediyoruz
  }

  test():Observable<MessageResultModel>{
    return this.httpClient.get<MessageResultModel>(`${this.apicontrollerUrl}/test`)
  }

  get isAuthhenticated(): boolean{
    if(!this.jwtHelperService.tokenGetter()) return false;
    if(this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }

  logOut(){
    this.localStrorageService.remove('token')
    this.removeTokenUserModel();
    this.router.navigateByUrl('');
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel }));
  }

  removeTokenUserModel(){
    this.store.dispatch(removeTokenUserModel());
  }

}

export function tokenGetter(){
  return localStorage.getItem('token')
}
