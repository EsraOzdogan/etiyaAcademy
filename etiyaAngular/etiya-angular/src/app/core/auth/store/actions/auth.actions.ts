import { createAction, props } from '@ngrx/store';

import { TokenUserModel } from '../../models/tokenUserModel';

// createAction => fonksiyon/aksiyon oluştur
// key => benzersiz '[Auth] Set Token User Model
// props => fonksiyonun içindeki propslar, parametreler
export const setTokenUserModel = createAction(
  '[Auth] Set Token User Model', // benzersiz key
  props<{ tokenUserModel: TokenUserModel }>() // parametreler
);

export const removeTokenUserModel = createAction('[Auth] Remove Token User Model');


//setTokenUserModel ve removeTokenUserModel --> action isimleri
