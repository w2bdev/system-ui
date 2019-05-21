<template>
  <v-app>
    <LanguageButton class="languageIcon" />
    <div class="body">
      <div class="background"></div>
      <div class="login">
        <v-layout row wrap>
          <v-flex xs12 class="mb-3">
            <h3>{{ $t('page.login.welcomeBack') }}</h3>
            <h5>{{ $t('page.login.pleaseLogin') }}</h5>
          </v-flex>
          <v-flex xs12>
            <v-text-field :label="$t('page.login.username')"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              :label="$t('page.login.password')"
              type="password"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn
              class="ml-0"
              depressed
              color="primary"
              @click.stop="loginAction"
              >{{ $t('button.login') }}</v-btn
            >
            <v-btn class="ml-0" flat color="primary">{{
              $t('button.forgotPassword')
            }}</v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

import LanguageButton from '@/components/button/LanguageButton.vue';

@Component({
  components: {
    LanguageButton,
  },
})
export default class extends Vue {

  private loginAction() {
    // Todo login
    this.$router.replace('/app/dashboard');
  }

}
</script>
<style lang="scss" scoped>
.languageIcon {
  position: absolute;
  right: 0;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  color: #7784a1;

  .background {
    flex: 1;
    background: url(../assets/login-bg.jpeg) no-repeat;
    background-position: center;
    background-size: cover;
  }

  .login {
    width: 100%;
    max-width: 550px;
    height: 100vh;
    padding: 0px 80px 0px 80px;
    display: flex;
    align-items: center;
  }
}
</style>
