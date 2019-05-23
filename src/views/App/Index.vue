<template>
  <v-app :dark="appState.darkMode">
    <Header />
    <NavDrawer />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Header from '@/components/layout/Header.vue';
import NavDrawer from '@/components/layout/NavDrawer.vue';
import { IApp } from '@/interfaces';

@Component({
  components: {
    Header,
    NavDrawer,
  },
})
export default class extends Vue {
  @State('app') private appState!: IApp;
}
</script>
