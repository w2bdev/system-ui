<template>
  <v-toolbar app flat clipped-left>
    <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="setMenu(!stateApp.menu)"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>{-Code-}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
    </v-btn>-->
    <v-btn icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-settings-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <UserMenu />
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import UserMenu from '@/components/layout/UserMenu.vue';
import { IApp } from '@/interfaces';

@Component({
  components: {
    UserMenu,
  },
})
export default class extends Vue {
  @State('app') private stateApp!: IApp;
  @Action('app/setMenu') private setMenu: any;
}
</script>
