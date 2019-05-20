import { ActionTree, ActionContext } from 'vuex';
import _ from 'lodash';

import { LOGIN_SUCCESSFUL, LOGOUT, SET_AUTH_ACCOUNT } from './mutationTypes';

import { IAuth, IRoot, ILoginCredential } from '@/interfaces';

const actions: ActionTree<IAuth, IRoot> = {
  // login({  }: ActionContext<IAuth, IRoot>, payload: ILoginCredential): void {

  // },

  // logout({ state }: ActionContext<IAuth, IRoot>): boolean {
  //   if (state.token) {
  //   }

  //   return false;
  // },
};

export default actions;
