//successe ek olarak token ekliyoruz eztends succesi alıyor yani
import { ResultModel } from '../../models/resultModel';

export interface UserLoginResponseModel extends ResultModel {
  access_token: string;
}
