import _ from 'lodash';

export default {
  getAppMenu(routes: any, appName: string) {
    const { children: AppRoutes } = _.find(
      routes,
      (route: any) => route.name === appName,
    );
    return AppRoutes;
  },
};
