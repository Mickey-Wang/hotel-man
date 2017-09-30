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
    height: 80%;
    scroll-behavior: smooth;
    overflow: hidden;
    overflow-y: scroll;
  }
  .ivu-tabs .ivu-tabs-content {
    height: 100%;
    .ivu-tabs-tabpane {
      padding: 2px;
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
    <Row style="height:85%">
      <!-- 供应商 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='supplier'" v-model="chooseBySuppliers">
        <TabPane label="供应商" name="suppliers" :disabled="supplierTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseSupplier">
            <MenuItem name="1">
            <span>携程</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="2">
            <span>艺龙</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="3">
            <span>深捷旅</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="4">
            <span>美团</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="5">
            <span>畅联</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="6">
            <span>泰坦云</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="7">
            <span>道旅</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="国家" name="nation" :disabled="supplierTabDisable[1]">
          <Menu theme="light" width="auto" @on-select="chooseNation">
            <MenuItem name="1">
            <span>中国</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="省份" name="province" :disabled="supplierTabDisable[2]">
          <Menu theme="light" width="auto" @on-select="chooseProvince">
            <MenuItem name="1">
            <span>广东省</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="2">
            <span>福建省</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="城市" style="height:100%" name="city" :disabled="supplierTabDisable[3]">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCity">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseBySuppliers.cities" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.num1}/${item.num2}/${item.num3}`}}</span>
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
            <MenuItem name="1">
            <span>中国</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="省份" name="province" :disabled="regionTabDisable[1]">
          <Menu theme="light" width="auto" @on-select="chooseProvinceCopy">
            <MenuItem name="1">
            <span>广东省</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="2">
            <span>福建省</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="城市" style="height:100%" name="city" :disabled="regionTabDisable[2]">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCityCopy">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseByRegions.cities" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.num1}/${item.num2}/${item.num3}`}}</span>
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
      supplierTabDisable:[false,true,true,true],
      //区域选项是否不可用
      regionTabDisable:[false,true,true],
      
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
      cityListChooseBySuppliers: {
        cities:[],
      },
      cityListChooseByRegions: {
        cities:[],
      }
    };
  },
  mounted: function() {
    this.$util.ajax.get('city').then(rs => {
      this.cityListChooseBySuppliers = rs.data.data;
      this.cityListChooseByRegions = rs.data.data;
    })
  },
  computed: {
    btnTypesupplier() {
      return this.btnType == 'supplier' ? 'primary' : 'ghost'
    },
    btnTypeRegion() {
      return this.btnType == 'region' ? 'primary' : 'ghost'
    },
    cityTotalSuppliers(){
      return this.cityListChooseBySuppliers.cities.length;
    },
    cityTotalRegions(){
      return this.cityListChooseByRegions.cities.length;
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


