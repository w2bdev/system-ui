import { MutationTree } from 'vuex';

import { LOGIN_SUCCESSFUL, LOGOUT, SET_AUTH_ACCOUNT } from './mutationTypes';
import { IAuth } from '@/interfaces';
import { initialState } from '@/store/modules/app/initialState';

const mutations: MutationTree<IAuth> = {
  [LOGIN_SUCCESSFUL](state: IAuth, payload: string) {
    state.loggedIn = true;
    state.token = payload;
  },
  [SET_AUTH_ACCOUNT](state: IAuth, payload: any) {
    state.account = payload;
  },
  [LOGOUT](state: IAuth, payload: string) {
    state.loggedIn = false;
    state.token = null;
    state.account = null;
  },
};

export default mutations;
