import _ from 'lodash';

export default {
  getSearchParamsByName(name: string, url: string = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');

    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },

  getAppMenu(routes: any, appName: string) {
    const { children: AppRoutes } = _.find(
      routes,
      (route: any) => route.name === appName,
    );
    return AppRoutes;
  },
};
