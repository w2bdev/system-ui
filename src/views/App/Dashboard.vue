<template>
  <div class="dashboard">
    <div class="tree-container ma-3">
      <TreeChart class="tree-chart" :json="treeData" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TreeChart from 'vue-tree-chart';

import ActionBar from '@/components/layout/ActionBar.vue';
import utils from '@/utils/index';
import _ from 'lodash';

@Component({
  components: {
    ActionBar,
    TreeChart,
  },
})
export default class extends Vue {
  private drawer: boolean = true;

  private treeData: any = {
    name: 'root',
    image_url: 'https://static.refined-x.com/avat.jpg',
    children: [
      {
        name: 'children1',
        image_url: 'https://static.refined-x.com/avat1.jpg',
      },
      {
        name: 'children2',
        image_url: 'https://static.refined-x.com/avat2.jpg',
        children: [
          {
            name: 'grandchild',
            image_url: 'https://static.refined-x.com/avat.jpg',
          },
          {
            name: 'grandchild2',
            image_url: 'https://static.refined-x.com/avat1.jpg',
            children: [
              {
                name: 'grandchild',
                image_url: 'https://static.refined-x.com/avat.jpg',
                children: [
                  {
                    name: 'grandchild',
                    image_url: 'https://static.refined-x.com/avat.jpg',
                  },
                  {
                    name: 'grandchild2',
                    image_url: 'https://static.refined-x.com/avat1.jpg',
                  },
                ],
              },
              {
                name: 'grandchild2',
                image_url: 'https://static.refined-x.com/avat1.jpg',
                children: [
                  {
                    name: 'grandchild',
                    image_url: 'https://static.refined-x.com/avat.jpg',
                  },
                  {
                    name: 'grandchild2',
                    image_url: 'https://static.refined-x.com/avat1.jpg',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}
</script>
<style lang="scss">
.tree-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;

  .tree-chart {
    .extend_handle {
      padding: 13px;
    }
    .avat {
      border-radius: 50%;
    }
  }
}
</style>
