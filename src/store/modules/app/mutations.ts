import { MutationTree } from 'vuex';
import {
  SET_VERSION,
  SET_MENU,
  SET_LANGUAGE,
  SET_DARKMODE,
} from './mutationTypes';
import { IApp } from '@/interfaces';
import { initialState } from './initialState';

const mutations: MutationTree<IApp> = {
  [SET_VERSION](state: IApp, payload: number) {
    state.version = payload;
  },

  [SET_MENU](state: IApp, payload: boolean) {
    state.menu = payload;
  },

  [SET_LANGUAGE](state: IApp, payload: string) {
    state.language = payload;
  },

  [SET_DARKMODE](state: IApp, payload: boolean) {
    state.darkMode = payload;
  },
};

export default mutations;
