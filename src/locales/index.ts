import { en as AppEn, zh as AppZh } from './common/application';
import { en as infoEn, zh as infoZh } from './common/info';
import { en as errorEn, zh as errorZh } from './common/error';
import { en as buttonEn, zh as buttonZh } from './common/button';
import { en as formEn, zh as formZh } from './common/form';
import { en as pageEn, zh as pageZh } from './common/page';
import { en as menuEn, zh as menuZh } from './common/menu';
import { en as headerEn, zh as headerZh } from './common/header';
import { en as dashboardModuleEn, zh as dashboardModuleZh } from './modules/dashboard';

export default {
  en: {
    name: 'English',
    application: AppEn,
    info: infoEn,
    error: errorEn,
    button: buttonEn,
    form: formEn,
    page: pageEn,
    menu: menuEn,
    header: headerEn,
    modules: {
      dashboard: dashboardModuleEn,
    },
  },
  zh: {
    name: '华语',
    application: AppZh,
    info: infoZh,
    error: errorZh,
    button: buttonZh,
    form: formZh,
    page: pageZh,
    menu: menuZh,
    header: headerZh,
    modules: {
      dashboard: dashboardModuleZh,
    },
  },
};
