<template>
  <div class="dashboard">
    <ActionBar/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ActionBar from '@/components/layout/ActionBar.vue';
import utils from '@/utils/index';
import _ from 'lodash';

@Component({
  components: {
    ActionBar,
  },
})
export default class extends Vue {
  private drawer: boolean = true;
}
</script>

