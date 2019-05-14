<template>
<div class="root">
  <v-toolbar flat height="50">
    <v-btn icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-information-outline</v-icon>
    </v-btn>
  </v-toolbar>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
.root{
  border-bottom: 1px solid #f3f3f3;
}
</style>

