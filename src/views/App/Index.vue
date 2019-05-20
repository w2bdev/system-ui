<template>
  <v-app>
    <Header />
    <ActionDrawer />
    <v-content>
      <!-- <ActionBar /> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';
import ActionDrawer from '@/components/layout/ActionDrawer.vue';
import ActionBar from '@/components/layout/ActionBar.vue';

@Component({
  components: {
    Header,
    ActionDrawer,
    ActionBar,
  },
})
export default class extends Vue {
  private drawer: boolean = true;
}
</script>
