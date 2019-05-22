<template>
  <v-navigation-drawer app clipped width="250" v-model="isOpen">
    <v-list dense class="pt-0 text-capitalize">
      <template v-for="item in items">
        <v-list-tile :key="item.title" v-if="item.meta && item.meta.showMenu" @click="goTo(item.path)">
          <v-list-tile-action v-if="item.meta && item.meta.icon">
            <v-icon>{{ item.meta.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { IApp } from '../../interfaces';
import utils from '@/utils/index';
import _ from 'lodash';

@Component({
  computed: {
    isOpen: {
      get(this: any) {
        return this.stateApp.menu;
      },
      set(this: any, value: boolean) {
        this.setMenu(value);
      },
    },
  },
})
export default class extends Vue {
  @State('app') private stateApp!: IApp;
  @Action('app/setMenu') private setMenu: any;

  private items: any = [];

  private getMenu() {
    const routes = _.get(this.$router, 'options.routes', []);
    this.items = utils.helper.getAppMenu(routes, 'app');
  }

  private goTo(path: string) {
    this.$router.push(path);
  }
  private created() {
    this.getMenu();
  }
}
</script>
