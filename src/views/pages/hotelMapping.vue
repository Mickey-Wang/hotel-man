<template>
  <section>
      <layout>
          <div slot="main-left">
              1232323
          </div>
          <div slot="main-right">
              12344
          </div>
      </layout>
  </section>
</template>

<script>
import layout from '../componets/layout.vue'
export default {
    data(){
        return{

        };
    },
    components:{
        layout,
    },
}
</script>

<style lang="less" scoped>
    section{
        height: 100%;
    }
</style>


