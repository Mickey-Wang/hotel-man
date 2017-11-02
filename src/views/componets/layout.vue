<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

.layout-row {
  height: 100%;
}

.layout-breadcrumb {
  padding: 5px 10px 0;
  .ivu-breadcrumb {
    font-size: 12px;
  }
}

.layout-content {
  min-height: 200px;
  height: 86%;
  margin: 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
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

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b; // min-width: 52px;
}

.layout-header {
  height: 40px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 60px; // background: #5b6270;
  border-radius: 3px; // margin: 15px auto;
  .logo {
    display: block;
    height: 60px;
    transition: all 0.5s ease-in-out 1s;
  }
  .logo1 {
    display: block;
    height: 40px;
    transition: all 0.5s ease-in-out 1s;
  }
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.ivu-col {
  transition: width .2s ease-in-out;
}
</style>
<style lang="less">
.layout-hide-text {
  .ivu-menu-submenu-title-icon {
    display: none !important;
  }
}
</style>

<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex" class="layout-row">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu theme="dark" width="auto" :active-name="routerName" :openNames="submenu" :accordion="true" @on-open-change="expend" @on-select="select">
        <div class="layout-logo-left">
          <img src="../../public/img/h.jpg" alt="logo" class="logo" v-show="logoSelect">
          <img src="../../public/img/s.jpg" alt="logo" class="logo1" v-show="!logoSelect">
        </div>
        <MenuItem name="index">
        <Icon type="ios-home" :size="iconSize"></Icon>
        <span class="layout-text">首页</span>
        </MenuItem>
        <Submenu name="confluence">
          <template slot="title">
            <Icon type="funnel" :size="iconSize"></Icon>
            <span class="layout-text">聚合系统</span>
          </template>
          <MenuItem name="city" class="layout-text">城市聚合</MenuItem>
          <MenuItem name="hotel" class="layout-text">酒店聚合</MenuItem>
          <MenuItem name="room" class="layout-text">房型聚合</MenuItem>
        </Submenu>
        <Submenu name="static">
          <template slot="title">
            <Icon type="images" :size="iconSize"></Icon>
            <span class="layout-text">静态基础数据</span>
          </template>
          <MenuItem name="hotelMan" class="layout-text">酒店管理</MenuItem>
          <MenuItem name="destinationMan" class="layout-text">目的地管理</MenuItem>
          <MenuItem name="pictureMan" class="layout-text">图片管理</MenuItem>
          <MenuItem name="2-1" class="layout-text">商圈管理</MenuItem>
          <MenuItem name="2-2" class="layout-text">品牌管理</MenuItem>
          <MenuItem name="2-3" class="layout-text">地标管理</MenuItem>
        </Submenu>
        <Submenu name="order">
          <template slot="title">
            <Icon type="ios-cart" :size="iconSize"></Icon>
            <span class="layout-text">订单管理</span>
          </template>
          <MenuItem name="3-1" class="layout-text">订单1</MenuItem>
          <MenuItem name="3-2" class="layout-text">订单2</MenuItem>
        </Submenu>
        <MenuItem name="supplier">
        <Icon type="ios-people" :size="iconSize"></Icon>
        <span class="layout-text">供应商管理</span>
        </MenuItem>
        <MenuItem name="sale">
        <Icon type="ios-sunny" :size="iconSize"></Icon>
        <span class="layout-text">促销管理</span>
        </MenuItem>
        <MenuItem name="sale2">
        <Icon type="social-yen" :size="iconSize"></Icon>
        <span class="layout-text">分销管理</span>
        </MenuItem>
      </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
        <Button type="dashed" shape="circle" icon="ios-refresh" @click="changeState"></Button>

      </div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="/">首页</BreadcrumbItem>
          <BreadcrumbItem v-show="selected[0]">{{selected[0]}}</BreadcrumbItem>
          <BreadcrumbItem v-show="selected[1]">{{selected[1]}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <slot></slot>
        </div>
      </div>
      <div class="layout-copy">
        Copyright &copy; 2004 - 2017 京东JD.com 版权所有
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spanLeft: 5,
      spanRight: 19,
      selected: ['', ''],
      submenu: ['confluence'],
      nav: [{
        name: '首页',
        url: '/'
      }, {
        name: '聚合系统',
        items: [{
          name: '城市聚合',
          url: '/mapping/city'
        }, {
          name: '酒店聚合',
          url: '/mapping/hotel'
        }, {
          name: '房型聚合',
          URL: '/mapping/room'
        }]
      }, {
        name: '供应商管理',
        url: '/supplier'
      }]
    }
  },
  watch: {
    routerName: function(val, old) {
      // console.log(val,old)
      this.changeBreadcrumb(val);
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    },
    logoSelect() {
      return this.spanLeft === 5 ? true : false;
    },
    routerName() {
      return this.$store.getters.routerName;
    }
  },
  mounted: function() {
    this.changeBreadcrumb(this.routerName);
  },
  methods: {
    changeState(){
      if (this.routerName == 'city') {
        this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE');      
      } else {
        this.$store.commit('HOTEL_SYNC_MAPPING_DATA_STATE');      
      }
    },
    changeBreadcrumb(name) {
      switch (name) {
        case 'index':
          this.selected[0] = '';
          this.selected[1] = '';
          break;
        case 'city':
          this.selected[0] = '聚合系统';
          this.selected[1] = '城市聚合';
          break;
        case 'hotel':
          this.selected[0] = '聚合系统';
          this.selected[1] = '酒店聚合';
          break;
        case 'destinationMan':
          this.selected[0] = '静态资源';
          this.selected[1] = '目的地管理';
          break;
        case 'pictureMan':
          this.selected[0] = '静态资源';
          this.selected[1] = '图片管理';
          break;
        case 'supplier':
          this.selected[0] = '供应商管理';
          this.selected[1] = '';
          break;
        case 'supplierMsg':
          this.selected[0] = '供应商管理';
          this.selected[1] = '供应商信息';
          break;
      }
    },
    select(name) {
      switch (name) {
        case 'index':
          this.$router.push('/');
          break;
        case 'city':
          this.$router.push('/mapping/city');
          break;
        case 'hotel':
          this.$router.push('/mapping/hotel');
          break;
        case 'room':
          this.$router.push('/mapping/room');
          break;
        case 'destinationMan':
          this.$router.push('/resource/destination');
          break;
        case 'pictureMan':
          this.$router.push('/resource/picture');
          break;
        case 'supplier':
          this.$router.push('/supplier');
          break;
      }
    },
    expend(n) {
      if (this.spanLeft === 1) {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    },
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 1;
        this.spanRight = 23;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    }
  }
}
</script>