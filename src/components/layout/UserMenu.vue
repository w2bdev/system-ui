<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-avatar size="35" class="avatar ml-2" v-on="on">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </template>
    <v-list>
      <v-list-tile
        v-for="(item, index) in items"
        :key="index"
        @click="clickAction"
      >
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  private translate: any;
  private items: any[] = [
    { title: this.translate('button.userSetting') },
    { title: this.translate('button.logout') },
  ];

  private clickAction() {
    //  Todo
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
