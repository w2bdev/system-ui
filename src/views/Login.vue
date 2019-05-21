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
            <h6 v-if="isError">{{ errorMessage}} </h6>
          </v-flex>
          <v-flex xs12>
            <v-text-field :label="$t('page.login.username')" 
              data-cy="username"
              v-model="username"
              name="username"
              v-validate="'required'"
              :error-messages="$hasError('username') ? $errorMsg('username') : ''"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              :label="$t('page.login.password')"
              type="password"
              data-cy="password"
              v-model="password"
              name="password"
              v-validate="'required'"
              :error-messages="$hasError('password') ? $errorMsg('password') : ''"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 class="mt-3">
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
import { Action } from 'vuex-class';
import moment from 'moment';

import LanguageButton from '@/components/button/LanguageButton.vue';
import { ILoginCredential } from '@/interfaces';

@Component({
  components: {
    LanguageButton,
  },
})
export default class extends Vue {
  @Action('auth/login') private login: any;

  private username: string = '';
  private password: string = '';
  private errorMessage: string = '';
  private isLoading: boolean = false;
  private isError: boolean = false;

  private loginAction() {
    // Todo login
    const loginCredential: ILoginCredential = {
      username: this.username,
      password: this.password,
    };

    this.$validator.validate().then((result: boolean) => {
      if (result) {

        this.isLoading = true;
        this.isError = false;
        this.errorMessage = '';

        this.login(loginCredential).then((success: boolean) => {
          if (success) {
            this.$router.replace('/app/dashboard');
          } else {
            this.isError = true;
            this.errorMessage = 'Invalid User';
          }
        });
      }
    });
  }

}
</script>
<style lang="scss" scoped>
.languageIcon {
  position: absolute;
  bottom: 0;
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
