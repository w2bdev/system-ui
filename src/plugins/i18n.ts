import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locales';
import config from '@/config';
import store from '@/store';

Vue.use(VueI18n);

Vue.mixin({
  methods: {
    translate(this: any, key: string) {
      return this.$root.$t(key);
    },
  },
});

export default new VueI18n({
  locale: store.state.app.language, // set locale
  fallbackLocale: config.defaultLocale,
  messages,
});
