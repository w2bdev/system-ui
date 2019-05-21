<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-avatar size="35" class="avatar ml-2" v-on="on">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </template>
    <v-list>
      <v-list-tile
        @click.stop="logoutAction"
      >
        <v-list-tile-title>{{ $t('button.logout') }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
@Component({})
export default class extends Vue {
  @Action('auth/logout') private logout: any;

  private translate: any;
  private items: any[] = [
    { title: this.translate('button.userSetting') },
    { title: this.translate('button.logout') },
  ];

  private logoutAction() {
    this.logout().then((result: any) => {
      this.$router.push('/login');
    });
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
