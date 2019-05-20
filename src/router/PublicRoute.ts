import Router from 'vue-router';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';

export const NotFoundRoute = { path: '/404', name: '404', component: NotFound };
export const RootRoute = { path: '/', name: 'root', redirect: '/login' };
export const LoginRoute = { path: '/login', name: 'login', component: Login };

export const DefaultRoute = {
  path: '*',
  redirect: '/404',
};
