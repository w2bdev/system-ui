<template>
  <div class="">
    <ve-line class="pa-5" :data="chartData" :theme-name="stateApp.darkMode ? 'dark' : 'light'" ></ve-line>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import utils from '@/utils/index';
import _ from 'lodash';
import { IApp } from '@/interfaces';

@Component({
  components: {},
})
export default class extends Vue {
   @State('app') private stateApp!: IApp;
  private drawer: boolean = true;
  private chartData: any = {
    columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
    rows: [
      {
        cost: 1523,
        date: '01/01',
        profit: 1523,
        growthRate: 0.12,
        people: 100,
      },
      {
        cost: 1223,
        date: '01/02',
        profit: 1523,
        growthRate: 0.345,
        people: 100,
      },
      { cost: 2123, date: '01/03', profit: 1523, growthRate: 0.7, people: 100 },
      {
        cost: 4123,
        date: '01/04',
        profit: 1523,
        growthRate: 0.31,
        people: 100,
      },
      {
        cost: 3123,
        date: '01/05',
        profit: 1523,
        growthRate: 0.12,
        people: 100,
      },
      {
        cost: 7123,
        date: '01/06',
        profit: 1523,
        growthRate: 0.65,
        people: 100,
      },
    ],
  };
}
</script>
<style lang="scss"></style>
