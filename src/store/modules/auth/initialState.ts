import { IAuth } from '@/interfaces';

export const initialState: IAuth = {
  token: null,
  loggedIn: false,
  account: {},
};
