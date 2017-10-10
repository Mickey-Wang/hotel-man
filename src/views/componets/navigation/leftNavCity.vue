<style lang="less">
.height100 {
  height: 100%;
}

.left-nav {
  height: 100%;
  .ivu-row {
    padding-top: 5px;
  }

  .ivu-tabs-bar {
    margin-bottom: 0;
  }
  .menu-box {
    position: relative;
    z-index: 10;
    height: 82%;
    scroll-behavior: smooth;
    overflow: hidden;
    overflow-y: scroll;
  }
  .menu-box-large {
    .menu-box;
    height: 90%;    
  }
  .ivu-tabs .ivu-tabs-content {
    height: 100%;
    .ivu-tabs-tabpane {
      padding: 2px;
    }
    .bottom-total {
      position: absolute;
      width: 100%;
      bottom: 31px;
      z-index: 1;
      color: #000;
      text-align: center;
    }
  }
  .ivu-tabs-bar {
    margin-bottom: 0;
  }
}
</style>
<template>
  <section class="left-nav">
    <Row :gutter="2">
      <Col span="8">
      <Select v-model="searchID" class="search-top-left">
        <Option v-for="item in searchCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      </Col>
      <Col span="12">
      <Input v-model="searchInput" placeholder="请输入ID或名称" class="search-top-right"></Input>
      </Col>
      <Col span="4" style="text-align:center">
      <Button type="primary" shape="circle" icon="ios-search"></Button>
      </Col>
    </Row>
    <Row>
      <ButtonGroup size="large" style="width:100%">
        <Button :type="btnTypesupplier" style="width:50%" @click="btnSupplier">按供应商审核</Button>
        <Button :type="btnTypeRegion" style="width:50%" @click="btnRegion">按区域审核</Button>
      </ButtonGroup>
    </Row>
    <Row style="height:88%;position:relative;">
      <!-- 供应商 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='supplier'" v-model="chooseBySuppliers">
        <TabPane label="供应商" name="suppliers" :disabled="supplierTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseSupplier">
            <MenuItem :name="item.id" v-for="(item,index) in supplierList" :key="index">
            <span>{{item.name}}</span>
            <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{supplierList.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="国家" name="nation" :disabled="supplierTabDisable[1]">
          <Menu theme="light" width="auto" @on-select="chooseNation">
            <MenuItem :name="item.id" v-for="(item,index) in nationListChooseBySuppliers" :key="index">
            <span>{{item.name}}</span>
            <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{nationListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" name="province" :disabled="supplierTabDisable[2]">
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvince">
              <MenuItem :name="item.id" v-for="(item,index) in provinceListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" style="height:100%" name="city" :disabled="supplierTabDisable[3]">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCity">
              <MenuItem :name="item.id" v-for="(item,index) in cityListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row type="flex" justify="center">
            <Page :total="cityTotalSuppliers" size="small" show-total></Page>
          </Row>
        </TabPane>
      </Tabs>

      <!-- 区域 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='region'" v-model="chooseByRegions">
        <TabPane label="国家" name="nation" :disabled="regionTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseNationCopy">
            <!-- :active-name="1" -->
            <MenuItem :name="item.id" v-for="(item,index) in nationListChooseByRegions" :key="index">
            <span>{{item.name}}</span>
            <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{nationListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" name="province" :disabled="regionTabDisable[1]">
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvinceCopy">
              <MenuItem :name="item.id" v-for="(item,index) in provinceListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" style="height:100%" name="city" :disabled="regionTabDisable[2]">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCityCopy">
              <MenuItem :name="item.id" v-for="(item,index) in cityListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row type="flex" justify="center">
            <Page :total="cityTotalRegions" size="small" show-total></Page>
          </Row>
        </TabPane>
      </Tabs>
    </Row>

  </section>
</template>

<script>
export default {
  data() {
    return {
      //搜索选项默认
      searchID: 0,
      //选项内容
      searchCondition: [{
        value: 0,
        label: '城市id'
      }, {
        value: 1,
        label: '城市名称'
      }],
      //搜索框内容
      searchInput: '',

      //供应商区域按钮
      btnType: 'supplier',
      //当前供应商选项卡
      chooseBySuppliers: "",
      //当前区域选项卡
      chooseByRegions: "",
      //供应商选项是否不可用
      supplierTabDisable: [false, true, true, true],
      //区域选项是否不可用
      regionTabDisable: [false, true, true],

      //城市三种状态id
      cityID: 0,
      //城市三种状态内容
      cityCondition: [{
        value: 0,
        label: '已聚待审'
      }, {
        value: 1,
        label: '已聚已审'
      }, {
        value: 2,
        label: '未聚未审'
      }],
      //城市数据
      supplierList: [{
        id:132,
        name: '携程',
        matchedCount: 222,
        matchedUncheckCount: 333,
        unmatchedCount: 111
      }, {
        id:133,
        name: '艺龙',
        matchedCount: 222,
        matchedUncheckCount: 111,
        unmatchedCount: 333
      }],
      nationListChooseBySuppliers: [{
        id:81,
        name: '中国',
        matchedCount: 222,
        matchedUncheckCount: 333,
        unmatchedCount: 111
      }],
      nationListChooseByRegions: [{
        id:81,
        name: '中国',
        matchedCount: 222,
        matchedUncheckCount: 333,
        unmatchedCount: 111
      }],
      provinceListChooseBySuppliers: [{
        id:876,
        name: '广东省',
        matchedCount: 222,
        matchedUncheckCount: 333,
        unmatchedCount: 111
      }, {
        id:677,
        name: '湖南省',
        matchedCount: 222,
        matchedUncheckCount: 111,
        unmatchedCount: 333
      }],
      provinceListChooseByRegions: [{
        id:888,
        name: '广东省',
        matchedCount: 222,
        matchedUncheckCount: 333,
        unmatchedCount: 111
      }, {
        id:282,
        name: '湖南省',
        matchedCount: 222,
        matchedUncheckCount: 111,
        unmatchedCount: 333
      }],
      cityListChooseBySuppliers: [],
      cityListChooseByRegions: []
    };
  },
  mounted: function() {
    this.$http.get('city').then(rs => {
      this.cityListChooseBySuppliers = rs.data.result;
      this.cityListChooseByRegions = rs.data.result;
    })
    this.$http.get('province').then(rs => {
      this.provinceListChooseBySuppliers = rs.data.result;
      this.provinceListChooseByRegions = rs.data.result;
    })
  },
  computed: {
    btnTypesupplier() {
      return this.btnType == 'supplier' ? 'primary' : 'ghost'
    },
    btnTypeRegion() {
      return this.btnType == 'region' ? 'primary' : 'ghost'
    },
    cityTotalSuppliers() {
      return this.cityListChooseBySuppliers.length;
    },
    cityTotalRegions() {
      return this.cityListChooseByRegions.length;
    }
  },
  methods: {
    btnSupplier() {
      this.btnType = 'supplier';
    },
    btnRegion() {
      this.btnType = 'region';
    },
    chooseSupplier(name) {
      this.chooseBySuppliers = "nation"
    },
    chooseNation(name) {
      this.chooseBySuppliers = "province"
    },
    chooseProvince(name) {
      this.chooseBySuppliers = "city"
    },
    chooseCity(name) {

    },
    chooseNationCopy(name) {
      this.chooseByRegions = "province"
    },
    chooseProvinceCopy(name) {
      this.chooseByRegions = "city"
    },
    chooseCityCopy(name) {

    }
  }
}
</script>


