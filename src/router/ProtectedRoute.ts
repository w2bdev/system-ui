import App from '@/views/App/Index.vue';

const DashboardRoute = {
  path: 'dashboard',
  name: 'home',
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
  // beforeEnter: (to: any, from: any, next: any) => {
  //   // Todo
  // },
};
