<template>
  <div>
    <v-menu :offset-y="isFloating">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-translate</v-icon>
        </v-btn></template
      >
      <v-list>
        <v-list-tile
          v-for="(item, key) in locale"
          :key="key"
          @click="onSetLanguage(key)"
        >
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import moment from 'moment';

import locale from '@/locales';
import { EventBus } from '@/utils/eventbus.ts';
import { MomentLocale } from '@/enums';

@Component({})
export default class extends Vue {
  @Prop({ default: false }) private isFloating!: boolean;
  @Action('app/setLanguage') private setLanguage: any;

  private locale = locale;

  private onSetLanguage(language: string) {
    this.setLanguage(language).then((result: any) => {
      moment.locale(MomentLocale[language]);
      this.$i18n.locale = language.toString();
      EventBus.$emit('update.locale', language);
    });
  }
}
</script>
<style lang="scss" scoped></style>
