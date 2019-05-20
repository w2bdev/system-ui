import {MutationTree} from 'vuex';
import {
  SET_VERSION, SET_MENU,
} from './mutationTypes';
import {IApp} from '@/interfaces';
import {initialState} from './initialState';

const mutations: MutationTree<IApp> = {
  [SET_VERSION](state: IApp, payload: number) {
    state.version = payload;
  },

  [SET_MENU](state: IApp, payload: boolean) {
    state.menu = payload;
  },
};

export default mutations;
