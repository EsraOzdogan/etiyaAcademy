//Tüm Reducer'ları belli degiskende topluyoruz
import { AuthState, authReducer } from './reducers/auth.reducer';

export interface AuthStates {
  appAuth: AuthState;               //Tüm Reducer'ları belli degiskende topluyoruz
}

export const authReducers = {
  appAuth: authReducer
};
