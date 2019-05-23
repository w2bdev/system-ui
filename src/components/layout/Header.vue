<template>
  <v-toolbar app flat clipped-left>
    <v-toolbar-side-icon
      v-if="$vuetify.breakpoint.mdAndDown"
      @click.stop="setMenu(!stateApp.menu)"
    ></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>{-{{ $t('application.name') }}-}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
    </v-btn>-->
    <!-- <v-btn icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn> -->
    <v-btn icon @click.stop="setDarkMode(!stateApp.darkMode)">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
    <!-- <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn> -->
    <LanguageButton :is-floating="true" />
    <UserMenu />
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import UserMenu from '@/components/layout/UserMenu.vue';
import LanguageButton from '@/components/button/LanguageButton.vue';
import { IApp } from '@/interfaces';

@Component({
  components: {
    UserMenu,
    LanguageButton,
  },
})
export default class extends Vue {
  @State('app') private stateApp!: IApp;
  @Action('app/setMenu') private setMenu: any;
  @Action('app/setDarkMode') private setDarkMode: any;

  private $vuetify: any;

  private forceOpenMenu() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      this.setMenu(true);
    }
  }
  private created() {
    this.forceOpenMenu();
  }
}
</script>
