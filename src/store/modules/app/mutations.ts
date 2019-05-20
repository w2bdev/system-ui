import {MutationTree} from 'vuex';
import {
  SET_VERSION,
} from './mutationTypes';
import {IApp} from '@/interfaces';
import {initialState} from './initialState';

const mutations: MutationTree<IApp> = {
  [SET_VERSION](state: IApp, payload: number) {
    state.version = payload;
  },
};

export default mutations;
