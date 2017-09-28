<template>
  <div class="root">
    <layout>
    <router-view></router-view>
    </layout>
  </div>
</template>
<style lang="less">
body,
html {
  height: 100%;
}

.root {
  height: 100%;
}
</style>

<script>
import layout from './views/componets/layout.vue'
export default {
  data() {
    return {

    };
  },
  components: {
    layout,
  },
  mounted() {
    
  },
  beforeDestroy() {

  },
  methods: {

  }
};
</script>