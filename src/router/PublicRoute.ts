import Router from 'vue-router';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';
import store from '@/store';

const isAuth = store.getters['auth/isAuth'];

export const NotFoundRoute = { path: '/404', name: '404', component: NotFound };
export const RootRoute = {
  path: '/',
  name: 'root',
  redirect: '/login',
};
export const LoginRoute = { path: '/login', name: 'login', component: Login,
  beforeEnter: (to: any, from: any, next: any) => {
    if (isAuth()) {
      next('/app/dashboard');
    } else {
      next();
    }
  },
};

export const DefaultRoute = {
  path: '*',
  redirect: '/404',
};
