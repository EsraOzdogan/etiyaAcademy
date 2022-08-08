import { createReducer, on } from '@ngrx/store';
import { removeTokenUserModel, setTokenUserModel } from '../actions/auth.actions';

import { TokenUserModel } from '../../models/tokenUserModel';

export interface AuthState {
  tokenUserModel?: TokenUserModel;      // ?:  --> undefined ya da null,  !: --> ileride tanımlıycam baslangic degerini     //tokenUserModel?: TokenUserModel | undefined -->aynı sey suankiyle
}

const initialAuthState: AuthState = {
  tokenUserModel: undefined               //baslangicta undefined
  // baska stateler de tanımlanabilir
  //test : undefined; gibi
};

// const state = {
//   tokenUserModel: "VERİ"
// }; // x05312132

// on(removeTokenUserModel, state => {
//     state.tokenUserModel = undefined;
//     return state;
// }),

// const state = {
//   tokenUserModel: undefined
// }; // x05312132

export const authReducer = createReducer(
  initialAuthState,
  on(setTokenUserModel, (state, action) => {        //setTokenUserModel aksiyonu
    // 1. paramtere o anki state değeri, 2. parametre üzerinde çalıştığımız action
    return { ...state, tokenUserModel: action.tokenUserModel };  //aynı sey ama bircok state durumunda kolay olur ...state     //return { auth: state.auth, test: state.test, tokenUserModel: action.tokenUserModel };
  }),
  on(removeTokenUserModel, state => {        //removeTokenUserModel aksiyonu      //çıkış yaptıgımda tokenUserModel undefined olacak
    const newState: AuthState = { ...state, tokenUserModel: undefined }; // x48746546        //return { ...state, tokenUserModel: undefined }; durumunda tokenUserModel'e yeni bir atama olmuyor bu nedenle değisken tanımladık  //state.tokenUserModel = undefined diyip return sate demiyoruz çünkü bellek adresini tutuyor bellek adresi degismiycek. verinin kendisini tutuyor obje. Bu nednele state degiskenini degerinin degisip degismedigini anlamıyoruz . Bu nedenle bellek adresini degistirmek iin yeni obje olusturuyoruz authState : AuthState diye
    return newState;
  })
);
// state = {
//     tokenUserModel: action.tokenUserModel
// } // x48746546
