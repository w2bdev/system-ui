import { IApp } from '@/interfaces';
import config from '@/config';
export default class App implements IApp {
  public language = config.defaultLocale;
  public menu = true;
  public version = 0;
}
