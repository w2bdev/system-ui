<template>
  <div class="">
    <ve-line :data="chartData" theme="dark"></ve-line>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import utils from '@/utils/index';
import _ from 'lodash';

@Component({
  components: {},
})
export default class extends Vue {
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
