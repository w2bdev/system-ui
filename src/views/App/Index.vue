<template>
  <v-app>
    <Header />
    <ActionDrawer />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';
import ActionDrawer from '@/components/layout/ActionDrawer.vue';

@Component({
  components: {
    Header,
    ActionDrawer,
  },
})
export default class extends Vue {
  private drawer: boolean = true;
}
</script>
