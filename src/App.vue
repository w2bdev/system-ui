<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import moment from 'moment';
import { Action, State } from 'vuex-class';

import { EventBus } from '@/utils/eventbus.ts';
import config from '@/config';
import { IMap } from './interfaces';
import { MomentLocale } from '@/enums';
import utils from '@/utils';

@Component({})
export default class extends Vue {
  @Action('app/setLanguage') private setLanguage: any;
  @State('app') private appState: any;

  private setLanguageByQuery() {
    const language = utils.helper.getSearchParamsByName('language');

    if (language) {
      this.setLanguage(language).then((result: any) => {
        moment.locale(MomentLocale[language]);
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
