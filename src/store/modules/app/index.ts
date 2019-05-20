import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { IApp, IRoot } from '@/interfaces';
import { initialState } from './initialState';

const state = initialState;
const namespaced: boolean = true;

export const app: Module<IApp, IRoot> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};

export default app;
