import Vue from 'vue';
import Router from 'vue-router';
import ProtectedRoute from './ProtectedRoute';
import {
  NotFoundRoute,
  RootRoute,
  LoginRoute,
  DefaultRoute,
} from './PublicRoute';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    NotFoundRoute,
    RootRoute,
    LoginRoute,
    ProtectedRoute,
    DefaultRoute,
  ],
});
