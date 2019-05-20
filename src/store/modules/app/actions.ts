import {ActionTree, ActionContext} from 'vuex';

import {
  SET_VERSION, SET_MENU, SET_LANGUAGE,
} from './mutationTypes';
import {IApp, IRoot} from '@/interfaces';

const actions: ActionTree<IApp, IRoot> = {

  setVersion({commit}: ActionContext<IApp, IRoot>, version: number): void {
    commit(SET_VERSION, version);
  },

  setMenu({commit}: ActionContext<IApp, IRoot>, open: boolean): void {
    commit(SET_MENU, open);
  },

  setLanguage({commit}: ActionContext<IApp, IRoot>, language: string): void {
    commit(SET_LANGUAGE, language);
  },

};

export default actions;
