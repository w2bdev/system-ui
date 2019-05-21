import App from '@/views/App/Index.vue';
import store from '@/store';

const isAuth = store.getters['auth/isAuth'];

const DashboardRoute = {
  path: 'dashboard',
  name: 'home',
  meta: {
    displayMenu: true,
    icon: 'mdi-apps',
  },
  component: () => import(/* webpackChunkName: "todo" */ '@/views/App/Dashboard.vue'),
};
const AppNotFound = {
  path: '/app/*',
  name: 'AppNotFound',
  component: () =>
    import(/* webpackChunkName: "app-not-found" */ '@/views/App/NotFound.vue'),
};

export default {
  path: '/app',
  name: 'app',
  component: App,
  children: [
    DashboardRoute,
    AppNotFound,
  ],
  beforeEnter: (to: any, from: any, next: any) => {
    // Todo
    if (isAuth()) {
      next();
    } else {
      next('/login');
    }
  },
};
