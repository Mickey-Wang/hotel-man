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
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  height: 80%;
  margin: 15px;
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
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 60px; // background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
  .logo {
    height: 60px;
  }
  .logo1 {
    height: 40px;
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
      <Menu theme="dark" width="auto" active-name="1-2" :accordion="true" @on-open-change="expend" @on-select="select">
        <div class="layout-logo-left">
          <img src="../../public/img/h.jpg" alt="logo" class="logo" v-if="logoSelect">
          <img src="../../public/img/s.jpg" alt="logo" class="logo1" v-else>
        </div>
        <MenuItem name="index">
        <Icon type="home"></Icon>
          首页
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
        <Submenu name="2">
          <template slot="title">
            <Icon type="images" :size="iconSize"></Icon>
            <span class="layout-text">静态管理</span>
          </template>
          <MenuItem name="2-1" class="layout-text">酒店管理</MenuItem>
          <MenuItem name="2-2" class="layout-text">目的地管理</MenuItem>
          <MenuItem name="2-3" class="layout-text">图片管理</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">订单管理</span>
          </template>
          <MenuItem name="3-1" class="layout-text">订单1</MenuItem>
          <MenuItem name="3-2" class="layout-text">订单2</MenuItem>
        </Submenu>
      </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
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
        2011-2017 &copy; jd lt
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
      selected:['',''],
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
      }]
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    },
    logoSelect() {
      return this.spanLeft === 5 ? true : false;
    }
  },
  methods: {
    select(name){
      console.log(name)
      switch (name) {
        case 'index':
          this.$router.push('/');
          this.selected[0]='';
          this.selected[1]='';
          break;
        case 'city':
          this.$router.push('/mapping/city');
          this.selected[0]='聚合系统';
          this.selected[1]='城市聚合';
          break;
        case 'hotel':
          this.$router.push('/mapping/hotel');
          this.selected[0]='聚合系统';
          this.selected[1]='酒店聚合';
          break;
        case 'room':
          this.$router.push('/mapping/room');
          this.selected[0]='聚合系统';
          this.selected[1]='房型聚合';
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