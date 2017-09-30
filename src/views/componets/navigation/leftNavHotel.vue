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
  .ivu-tabs .ivu-tabs-content {
    height: 100%;
    .ivu-tabs-tabpane {
      padding: 2px;
    }
    .bottom-total {
      position: absolute;
      width:100%;
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
    <Row style="height:88%">
      <!-- 供应商 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='supplier'" v-model="chooseBySuppliers">
        <TabPane label="供应商" name="suppliers" :disabled="supplierTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseSupplier">
            <MenuItem :name="index" v-for="(item,index) in supplierList" :key="index">
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
            <MenuItem :name="index" v-for="(item,index) in nationListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{nationListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" name="province" :disabled="supplierTabDisable[2]">
          <Menu theme="light" width="auto" @on-select="chooseProvince">
            <MenuItem :name="index" v-for="(item,index) in provinceListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" name="city" :disabled="supplierTabDisable[3]">
          <Menu theme="light" width="auto" @on-select="chooseCity">
            <MenuItem :name="index" v-for="(item,index) in cityListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{cityListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="酒店" style="height:100%" name="hotel" :disabled="supplierTabDisable[4]">
          <Row class="check-select">
            <Select v-model="hotelID">
              <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseHotel('region')">
              <MenuItem :name="index" v-for="(item,index) in hotelListChooseBySuppliers.hotel" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.num1}/${item.num2}/${item.num3}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row type="flex" justify="center">
            <Page :total="hotelTotalSuppliers" size="small" show-total></Page>
          </Row>
        </TabPane>
      </Tabs>

      <!-- 区域 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='region'" v-model="chooseByRegions">
        <TabPane label="国家" name="nation" :disabled="regionTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseNationCopy">
            <!-- :active-name="1" -->
            <MenuItem :name="index" v-for="(item,index) in nationListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{nationListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" name="province" :disabled="regionTabDisable[1]">
          <Menu theme="light" width="auto" @on-select="chooseProvinceCopy">
            <MenuItem :name="index" v-for="(item,index) in provinceListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" name="city" :disabled="regionTabDisable[2]">
          <Menu theme="light" width="auto" @on-select="chooseCityCopy">
            <MenuItem :name="index" v-for="(item,index) in cityListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{cityListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="酒店" style="height:100%" name="hotel" :disabled="regionTabDisable[3]">
          <Row class="check-select">
            <Select v-model="hotelID">
              <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseHotelCopy">
              <MenuItem :name="index" v-for="(item,index) in hotelListChooseBySuppliers.hotel" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.num1}/${item.num2}/${item.num3}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row type="flex" justify="center">
            <Page :total="hotelTotalRegions" size="small" show-total></Page>
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
        label: '酒店id'
      }, {
        value: 1,
        label: '酒店名称'
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
      supplierTabDisable:[false,true,true,true,true],
      //区域选项是否不可用
      regionTabDisable:[false,true,true,true],
      
      //酒店三种状态id
      hotelID: 0,
      //酒店三种状态内容
      hotelCondition: [{
        value: 0,
        label: '已聚待审'
      }, {
        value: 1,
        label: '已聚已审'
      }, {
        value: 2,
        label: '未聚未审'
      }],
      //酒店数据
      supplierList:[{
          name:'携程',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      },{
          name:'艺龙',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      }],
      nationListChooseBySuppliers:[{
          name:'中国',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      }],
      nationListChooseByRegions:[{
          name:'中国',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      }],
      provinceListChooseBySuppliers:[{
          name:'广东省',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      },{
          name:'湖南省',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      }],
      provinceListChooseByRegions:[{
          name:'广东省',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      },{
          name:'湖南省',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      }],
      cityListChooseBySuppliers:[{
          name:'北海',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      },{
          name:'镇江',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      },{
          name:'武汉',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      }],
      cityListChooseByRegions:[{
          name:'北海',
          matchedCount:222,
          matchedUncheckCount:333,
          unmatchedCount:111
      },{
          name:'镇江',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      },{
          name:'武汉',
          matchedCount:222,
          matchedUncheckCount:111,
          unmatchedCount:333
      }],
      hotelListChooseBySuppliers: {
        hotel:[{
          name:'北京五棵松和颐酒店',
          num1:1234,
          num2:1231,
          num3:2222
        },{
          name:'北京五棵松和颐酒店',
          num1:1234,
          num2:1231,
          num3:2222
        }],
      },
      hotelListChooseByRegions: {
        hotel:[{
          name:'北京五棵松和颐酒店',
          num1:1234,
          num2:1231,
          num3:2222
        },{
          name:'北京五棵松和颐酒店',
          num1:1234,
          num2:1231,
          num3:2222
        }],
      }
    };
  },
  mounted: function() {
    // this.$util.ajax.get('city').then(rs => {
    //   this.hotelListChooseBySuppliers = rs.data.data;
    //   this.hotelListChooseByRegions = rs.data.data;
    // })
  },
  computed: {
    btnTypesupplier() {
      return this.btnType == 'supplier' ? 'primary' : 'ghost'
    },
    btnTypeRegion() {
      return this.btnType == 'region' ? 'primary' : 'ghost'
    },
    hotelTotalSuppliers(){
      return this.hotelListChooseBySuppliers.hotel.length;
    },
    hotelTotalRegions(){
      return this.hotelListChooseByRegions.hotel.length;
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
        this.chooseBySuppliers = "hotel"
    },
    chooseHotel(name){

    },
    chooseNationCopy(name) {
      this.chooseByRegions = "province"
    },
    chooseProvinceCopy(name) {
      this.chooseByRegions = "city"
    },
    chooseCityCopy(name) {
      this.chooseByRegions = "hotel"
    },
    chooseHotelCopy(name){

    }

  }
}
</script>