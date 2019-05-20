<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import { Action, State } from 'vuex-class';

import { EventBus } from '@/utils/eventbus.ts';
import config from '@/config';

@Component({})
export default class extends Vue {
  @Action('app/setLanguage') private setLanguage: any;
  @State('app') private appState: any;

  private setLanguageByQuery() {
    // might have browser support issue
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#Browser_compatibility;
    const searchParams = new URLSearchParams(window.location.search);
    const language = searchParams.has('language')
      ? searchParams.get('language')
      : _.get(this.appState, 'language', config.defaultLocale);

    if (language) {
      this.setLanguage(language).then((result: any) => {
        this.$i18n.locale = language.toString();
        EventBus.$emit('update.locale', language);
      });
    }
  }

  private created() {
    this.setLanguageByQuery();
  }
}
</script>
