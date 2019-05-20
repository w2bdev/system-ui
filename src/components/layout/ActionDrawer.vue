<template>
  <v-navigation-drawer app clipped width="250">
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  private items: any = [
    { title: 'Add', icon: 'mdi-plus-circle-outline' },
    { title: 'Filter', icon: 'mdi-filter-outline' },
  ];
  private right: any = null;
}
</script>
