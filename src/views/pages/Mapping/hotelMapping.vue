<template>
  <div class="layout-row">
    <Row class="layout-row">
      <Col span="18" push="6" class="layout-content-main-right">
      <hotel></hotel>
      </Col>
      <Col span="6" pull="18" class="layout-content-main-left">
      <left-nav></left-nav>
      </Col>
    </Row>
  </div>
  
</template>
<style lang="less" scoped>
.layout-row {
  height: 100%;
}
@height: 100%;
.layout-content-main {
  padding: 10px;
  height: @height;
  .layout-content-main-base {
    height: @height;
    border: 1px dashed #ddd;
    padding: 2px;
  }
  .layout-content-main-left {
    .layout-content-main-base;
  }
  .layout-content-main-right {
    .layout-content-main-base;
  }
}
</style>

<script>
import hotel from '../../componets/tables/hotelExamine.vue'
import leftNav from '../../componets/navigation/leftNavHotel'
export default {
  data() {
    return {

    }
  },
  components: {
      hotel,
    'left-nav': leftNav
  },
}
</script>