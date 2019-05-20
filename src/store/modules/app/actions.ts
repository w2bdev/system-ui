import {ActionTree, ActionContext} from 'vuex';

import {
  SET_VERSION, SET_MENU,
} from './mutationTypes';
import {IApp, IRoot} from '@/interfaces';

const actions: ActionTree<IApp, IRoot> = {

  setVersion({commit}: ActionContext<IApp, IRoot>, version: number): void {
    commit(SET_VERSION, version);
  },

  setMenu({commit}: ActionContext<IApp, IRoot>, open: boolean): void {
    commit(SET_MENU, open);
  },

};

export default actions;
