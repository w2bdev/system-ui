<template>
  <v-navigation-drawer app clipped width="250" v-model="isOpen">
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }} {{ isOpen }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { IApp } from '../../interfaces';

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

  private items: any = [
    { title: 'Add', icon: 'mdi-plus-circle-outline' },
    { title: 'Filter', icon: 'mdi-filter-outline' },
  ];
}
</script>
