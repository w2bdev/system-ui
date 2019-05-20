import {ActionTree, ActionContext} from 'vuex';

import {
  SET_VERSION,
} from './mutationTypes';
import {IApp, IRoot} from '@/interfaces';

const actions: ActionTree<IApp, IRoot> = {

  setVersion({commit}: ActionContext<IApp, IRoot>, version: number): void {
    commit(SET_VERSION, version);
  },

};

export default actions;
