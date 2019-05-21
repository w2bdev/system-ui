import { ActionTree, ActionContext } from 'vuex';
import _ from 'lodash';

import { LOGIN_SUCCESSFUL, LOGOUT, SET_AUTH_ACCOUNT } from './mutationTypes';

import { IAuth, IRoot, ILoginCredential } from '@/interfaces';

const actions: ActionTree<IAuth, IRoot> = {
  login({ commit }: ActionContext<IAuth, IRoot>, payload: ILoginCredential): boolean {
    if (payload.username === 'system' && payload.password === 'password') {
      commit(LOGIN_SUCCESSFUL, 'fake_token');
      return true;
    } else {
      return false;
    }
  },

  logout({ commit }: ActionContext<IAuth, IRoot>): void {
    commit(LOGOUT);
  },
};

export default actions;
