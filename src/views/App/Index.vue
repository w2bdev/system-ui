<template>
  <v-app>
    <Header />
    <NavDrawer />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';
import NavDrawer from '@/components/layout/NavDrawer.vue';

@Component({
  components: {
    Header,
    NavDrawer,
  },
})
export default class extends Vue {
  private drawer: boolean = true;
}
</script>
