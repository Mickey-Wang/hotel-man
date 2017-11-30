<style lang="less">
.height100 {
  height: 100%;
}

.left-nav-hotel{
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
    height: 78%;
    scroll-behavior: smooth;
    overflow: hidden;
    overflow-y: auto;
  }
  .menu-box-large {
    .menu-box;
    height: 90%;
  }
  
  .ivu-tabs .ivu-tabs-content {
    height: 100%;
    .ivu-tabs-tabpane {
      padding: 2px;
      .ivu-menu-vertical .ivu-menu-item{
        padding: 6px 20px;
      }
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
  <section class="left-nav-hotel">
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
      <Button type="primary" shape="circle" icon="ios-search" @click="searchHotel(searchInput)"></Button>
      <!-- <Button type="dashed" shape="circle" icon="ios-refresh" @click="changeState"></Button> -->
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
      <Spin size="large" fix v-if="listShow"></Spin>
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='supplier'" v-model="chooseTabBySuppliers" @on-click="doClickSupplierTab">
        <TabPane label="供应商" name="suppliers" :disabled="supplierTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseSupplier">
            <MenuItem :name="index" v-for="(item,index) in supplierList" :key="index">
            <span>{{item.name}}</span>
            <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{supplierList?supplierList.length:0}}条</span>
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
            <span>共计{{nationListChooseBySuppliers?nationListChooseBySuppliers.length:0}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" style="height:94%" name="province" :disabled="supplierTabDisable[2]">
          <Row v-if="provinceListChooseBySuppliers&&provinceListChooseBySuppliers.length>20">
            <Input v-model="searchProvinceBySuppliers" placeholder="输入关键词查询" @on-change="doListFilter(searchProvinceBySuppliers,'provinceListChooseBySuppliers','provinceListChooseBySuppliersFilter')"></Input>
          </Row>
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvince">
              <MenuItem :name="index" v-for="(item,index) in provinceListChooseBySuppliersFilter" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseBySuppliersFilter?provinceListChooseBySuppliersFilter.length:0}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" style="height:94%" name="city" :disabled="supplierTabDisable[3]">
          <Row v-if="cityListChooseBySuppliers&&cityListChooseBySuppliers.length>20">
            <Input v-model="searchCityBySuppliers" placeholder="输入关键词查询" @on-change="doListFilter(searchCityBySuppliers,'cityListChooseBySuppliers','cityListChooseBySuppliersFilter')"></Input>
          </Row>
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseCity">
              <MenuItem :name="item.id" v-for="(item,index) in cityListChooseBySuppliersFilter" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{cityListChooseBySuppliersFilter?cityListChooseBySuppliersFilter.length:0}}条</span>
          </Row>
        </TabPane>
        <TabPane label="酒店" style="height:94%" name="hotel" :disabled="supplierTabDisable[4]">
          <Row class="check-select">
            <Select v-model="checkStateBySuppliers" @on-change="chooseStatebySupplier">
              <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row>
            <Input 
            v-model="searchHotelBySuppliers" 
            placeholder="输入关键词查询,按回车可查找更多" 
            @on-change="doListFilter(
              searchHotelBySuppliers,
              'hotelListChooseBySuppliers',
              'hotelListChooseBySuppliersFilter')"
            @on-enter="doHotelListFilter(searchHotelBySuppliers,'suppliers')"
            >
            </Input>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseHotel" v-if="hotelListChooseBySuppliersFilter.length>0">
              <MenuItem :name="index" v-for="(item,index) in hotelListChooseBySuppliersFilter" :key="index">
              <span>{{item.name}}</span>
              <!-- <span>{{`${item.matchedCount||""}/${item.matchedUncheckCount||""}/${item.unmatchedCount||""}`}}</span> -->
              </MenuItem>
            </Menu>
            <Row v-else style="font-size:18px;text-align:center;">
              {{hotelListChooseBySuppliers&&hotelListChooseBySuppliers.length>0?'按回车查找更多':"暂无数据"}}
            </Row>
          </Row>
          <Row type="flex" justify="center">
            <Page :current.sync="curPageSuppliers" :total="hotelTotalSuppliers" :page-size="hotelPageSizeSuppliers" @on-change="choosePageSuppliers" size="small" show-total></Page>
          </Row>
        </TabPane>
      </Tabs>

      <!-- 区域 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='region'" v-model="chooseTabByRegions" @on-click="doClickRegionTab">
        <TabPane label="国家" name="nation" :disabled="regionTabDisable[0]">
          <Menu theme="light" width="auto" @on-select="chooseNationCopy">
            <!-- :active-name="1" -->
            <MenuItem :name="index" v-for="(item,index) in nationListChooseByRegions" :key="index">
            <span>{{item.name}}</span>
            <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{nationListChooseByRegions?nationListChooseByRegions.length:0}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" style="height:94%" name="province" :disabled="regionTabDisable[1]">
          <Row v-if="provinceListChooseByRegions.length>20">
            <Input 
              v-model="searchProvinceByRegions" 
              placeholder="输入关键词查询" 
              @on-change="doListFilter(
                searchProvinceByRegions,
                'provinceListChooseByRegions',
                'provinceListChooseByRegionsFilter'
                )">
              </Input>
          </Row>
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvinceCopy">
              <MenuItem :name="index" v-for="(item,index) in provinceListChooseByRegionsFilter" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegionsFilter?provinceListChooseByRegionsFilter.length:0}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" style="height:94%" name="city" :disabled="regionTabDisable[2]">
          <Row v-if="cityListChooseByRegions&&cityListChooseByRegions.length>20">
            <Input 
              v-model="searchCityByRegions" 
              placeholder="输入关键词查询" 
              @on-change="doListFilter(
                searchCityByRegions,
                'cityListChooseByRegions',
                'cityListChooseByRegionsFilter'
                )">
              </Input>
          </Row>
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseCityCopy">
              <MenuItem :name="item.id" v-for="(item,index) in cityListChooseByRegionsFilter" :key="index">
              <span>{{item.name||item.hotelName}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{cityListChooseByRegionsFilter?cityListChooseByRegionsFilter.length:0}}条</span>
          </Row>
        </TabPane>
        <TabPane label="酒店" style="height:94%" name="hotel" :disabled="regionTabDisable[3]">
          <Row class="check-select">
            <Select v-model="checkStateByRegions" v-show="isCheckStateByRegionsShow" @on-change="chooseStatebyRegion">
              <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row>
          <!-- <Row v-if="hotelListChooseByRegions&&hotelListChooseByRegions.length>20"> -->
            <Input 
              v-model="searchHotelByRegions" 
              placeholder="输入关键词查询,按回车可查找更多" 
              @on-change="doListFilter(
                searchHotelByRegions,
                'hotelListChooseByRegions',
                'hotelListChooseByRegionsFilter'
                )"
              @on-enter="doHotelListFilter(searchHotelByRegions,'regions')"    
            >
            </Input>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseHotelCopy" v-if="hotelListChooseByRegionsFilter.length>0">
              <MenuItem :name="index" v-for="(item,index) in hotelListChooseByRegionsFilter" :key="index">
              <span>{{item.name||item.hotelName}}</span>
              <span v-if="checkStateByRegions == 10">{{`${item.unmatchedCount||"0"}`}}</span>
              <span v-else>{{`${item.matchedCount+"/"||"0"}${item.matchedUncheckCount||"0"}`}}</span>
              </MenuItem>
            </Menu>
            <Row v-else style="font-size:18px;text-align:center;">
              {{hotelListChooseByRegions.length>0?'按回车查找更多':'暂无数据'}}
            </Row>
          </Row>
          <Row type="flex" justify="center">
            <Page :current.sync="curPageRegions" :total="hotelTotalRegions" :page-size="hotelPageSizeRegions" @on-change="choosePageRegions" size="small" show-total></Page>
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
      searchID: "hotelId",
      //选项内容
      searchCondition: [
        {
          value: "hotelId",
          label: "酒店id"
        },
        {
          value: "hotelName",
          label: "酒店名称"
        }
      ],
      //搜索框内容
      searchInput: "",
      searchInputCache: "",
      searchSupplier: "",//供应商筛选入口
      searchProvinceBySuppliers:'',//供应商侧省份筛选入口
      searchProvinceByRegions:'',//jd侧省份筛选入口
      searchCityBySuppliers:'',//供应商侧城市筛选入口
      searchCityByRegions:'',//jd侧城市筛选入口
      searchHotelBySuppliers:'',//供应商侧酒店筛选入口
      searchHotelByRegions:'',//jd侧酒店筛选入口
      
      //供应商区域按钮
      btnType: "supplier",
      //最后一次数据获取是supplier/region
      getDataType: "",
      //当前供应商选项卡
      chooseTabBySuppliers: "",
      //当前区域选项卡
      chooseTabByRegions: "",
      //供应商选项是否不可用
      supplierTabDisable: [false, true, true, true, true],
      //区域选项是否不可用
      regionTabDisable: [false, true, true, true],

      //loading
      listShow: false,
      //酒店三种状态id
      checkStateBySuppliers: 20,
      checkStateByRegions: 20,
      //是否显示区域审核酒店状态选择
      isCheckStateByRegionsShow: true,
      hotelCondition: [
        {
          value: 20,
          label: "已聚待审"
        },
        {
          value: 30,
          label: "已聚已审"
        },
        {
          value: 10,
          label: "未聚待审"
        }
      ],
      //当前选中的
      //供应商id
      currentSupplierId: 0,
      //省份id
      currentProvinceIdBySuppliers: 0,
      currentProvinceIdByRegions: 0,
      currentCityIdBySuppliers: 0,
      currentCityIdByRegions: 0,
      currentHotelIndexBySuppliers: 0,
      currentHotelIndexByRegions: 0,
      //列表数据
      supplierList: [],
      nationListChooseBySuppliers: [],
      nationListChooseByRegions: [],
      provinceListChooseBySuppliers: [],
      provinceListChooseByRegions: [],
      cityListChooseBySuppliers: [],
      cityListChooseByRegions: [],
      hotelListChooseBySuppliers: [],
      hotelListChooseByRegions: [],
      //列表筛选数据
      provinceListChooseBySuppliersFilter: [],
      provinceListChooseByRegionsFilter: [],
      cityListChooseBySuppliersFilter: [],
      cityListChooseByRegionsFilter: [],
      hotelListChooseBySuppliersFilter: [],
      hotelListChooseByRegionsFilter: [],
      //分页信息
      curPageSuppliers: 1,
      curPageRegions: 1,
      hotelTotalSuppliers: 0,
      hotelTotalRegions: 0,
      hotelPageSizeSuppliers: 30,
      hotelPageSizeRegions: 30
    };
  },
  watch: {
    hotelSyncMappingDataState: function(val, old) {
      // console.log(val,old)
      if (val) this.refreshData();
    }
  },
  mounted: function() {
    this.$http
      .post("/mapping/hotelMapping/navTabSearch", {
        sourceType: 20,
        dimensionType: 10,
        // times: 7
      })
      .then(rs => {
        this.supplierList = rs.data.body.statisticList;
      });
    this.$http
      .post("/mapping/hotelMapping/navTabSearch", {
        sourceType: 10,
        dimensionType: 20,
        // times: 1
      })
      .then(rs => {
        this.nationListChooseByRegions = rs.data.body.statisticList;
      });
  },
  computed: {
    btnTypesupplier() {
      return this.btnType == "supplier" ? "primary" : "ghost";
    },
    btnTypeRegion() {
      return this.btnType == "region" ? "primary" : "ghost";
    },
    hotelSyncMappingDataState() {
      return this.$store.getters.hotelSyncMappingDataState;
    }
  },
  methods: {
    reset(status){
      if (status == 'suppliers') {
        this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 10,
          // times: 7
        })
        .then(rs => {
          this.supplierList = rs.data.body.statisticList;
        })
        
      } else {
        this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 10,
          dimensionType: 20,
          // times: 1
        })
        .then(rs => {
          this.nationListChooseByRegions = rs.data.body.statisticList;
        })
        
      }
    },
    changeState() {
      this.$store.commit("HOTEL_SYNC_MAPPING_DATA_STATE");
    },
    //列表和表格同步更新数据
    refreshData() {
      this.btnType = this.getDataType;
      this.listShow = true;
      if (this.getDataType == "supplier") {
        this.chooseTabBySuppliers = "hotel";
        this.chooseCity(
          this.currentCityIdBySuppliers,
          this.checkStateBySuppliers,
          this.curPageSuppliers
        )
        .then(rs => {
          this.listShow = false;
          if (rs) {
            return this.chooseHotel(this.currentHotelIndexBySuppliers);
          } else {
            return this.chooseHotel(-1);//传入-1自动响应停止请求数据的情况    
          }
        })
        .then(rs => {
          console.log('hotel sync');
          this.$store.commit("HOTEL_SYNC_MAPPING_DATA_STATE");
        });
      } else {
        this.chooseTabByRegions = "hotel";
        this.chooseCityCopy(
          this.currentCityIdByRegions,
          this.checkStateByRegions,
          this.curPageRegions
        )
          .then(rs => {
            this.listShow = false;
            if (rs) {
              return this.chooseHotelCopy(this.currentHotelIndexByRegions);
            } else {
              return this.chooseHotelCopy(-1);//传入-1自动响应停止请求数据的情况
            }
          })
          .then(rs => {
            this.$store.commit("HOTEL_SYNC_MAPPING_DATA_STATE");
          });
      }
    },
    //筛选
    listFilter(keywords,searchArr){
      let resultArr = [];
      if (keywords == ""){
        resultArr = searchArr;
        return resultArr
      }
      searchArr.map((val, index) => {
        if (val.name.indexOf(keywords) > -1) {
          resultArr.push(val);
        }
      });
      console.log(resultArr)
      return resultArr;
    },
    doListFilter(keywords,searchArr,filterArr) {
      this[filterArr] = this.listFilter(keywords,this[searchArr]);
    },
    doHotelListFilter(keyword,type){
      if (type == 'suppliers') {
        this.chooseCity(
          this.currentCityIdBySuppliers,
          this.checkStateBySuppliers,
          1,
          30,
          keyword
        );
        this.curPageSuppliers = 1;//重置页码
      } else {
        this.chooseCityCopy(
          this.currentCityIdByRegions,
          this.checkStateByRegions,
          1,
          30,
          keyword
        );
        this.curPageRegions = 1;//重置页码
      }
    },
    //分页按钮选择
    choosePageSuppliers() {
       let page = this.curPageSuppliers;
      // console.log(page)
      this.chooseCity(
        this.currentCityIdBySuppliers,
        this.checkStateBySuppliers,
        page,
        30,
        this.searchHotelBySuppliers
      );
    },
    choosePageRegions() {
      let page = this.curPageRegions;
      // console.log(page)
      if (this.isCheckStateByRegionsShow) {
        this.chooseCityCopy(
          this.currentCityIdByRegions,
          this.checkStateByRegions,
          page,
          30,
          this.searchHotelByRegions
        );        
      } else {
        this.searchHotel(this.searchInputCache,page);
      }
    },
    //按钮选择
    btnSupplier() {
      this.btnType = "supplier";
      this.$store.commit("HOTEL_TABLETYPE", 20); //将数据状态重置为20
    },
    btnRegion() {
      this.$store.commit("HOTEL_TABLETYPE", 20);
      this.btnType = "region";
    },
    //选择供应商tab
    doClickSupplierTab(name) {
      // console.log(name)
      if (name == "suppliers"){
        this.reset('suppliers');
        this.checkStateBySuppliers = 20;//重置审核类型
        this.isCheckStateByRegionsShow = true;//重置查询和审核类型显示
        this.curPageSuppliers = 1;//重置页码
        this.hotelTotalSuppliers = 0;//重置数量
        this.searchSupplier = "";//供应商筛选入口
        this.searchProvinceBySuppliers = '';//供应商侧省份筛选入口
        this.searchCityBySuppliers = '';//供应商侧城市筛选入口
        this.searchHotelBySuppliers = '';//供应商侧酒店筛选入口
        this.$store.commit("HOTEL_TABLETYPE", 20);
        this.chooseTabBySuppliers = "suppliers";
      }
    },
    //选择区域tab
    doClickRegionTab(name){
      if (name == "nation"){
        this.reset('regions');
        this.checkStateByRegions = 20;
        this.isCheckStateByRegionsShow = true;
        this.urPageRegions = 1,
        this.hotelTotalRegions = 0;
        this.searchProvinceByRegions = '';//jd侧省份筛选入口
        this.searchCityeByRegions = '';//jd侧城市筛选入口
        this.searchHotelByRegions = '';//jd侧酒店筛选入口
        this.$store.commit("HOTEL_TABLETYPE", 20);
        this.chooseTabByRegions = "nation";
      }
    },
    //选择供应商tab
    chooseSupplier(index) {
      this.chooseTabBySuppliers = "nation";
      this.currentSupplierId = this.supplierList[index].id;
      this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 20,
          supplierCode: this.supplierList[index].id,
          // times: 1
        })
        .then(rs => {
          this.nationListChooseBySuppliers = rs.data.body.statisticList;
        });
    },
    chooseNation(index) {
      this.chooseTabBySuppliers = "province";
      this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 30,
          countryCode: this.nationListChooseBySuppliers[index].id,
          supplierCode: this.currentSupplierId
        })
        .then(rs => {
          this.provinceListChooseBySuppliersFilter = this.provinceListChooseBySuppliers = rs.data.body.statisticList;
        });
    },
    chooseProvince(index) {
      this.chooseTabBySuppliers = "city";
      var provinceCode = this.searchProvinceBySuppliers?this.provinceListChooseBySuppliersFilter[index].id:this.provinceListChooseBySuppliersFilter[index].id
      this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 40,
          provinceCode: provinceCode,
          supplierCode: this.currentSupplierId
        })
        .then(rs => {
          this.cityListChooseBySuppliersFilter = this.cityListChooseBySuppliers = rs.data.body.statisticList;
        });
    },
    chooseCity(id, map = 20, page = 1, pageSize = 30,keyword = "") {
      this.listShow = true;
      this.chooseTabBySuppliers = "hotel";
      this.currentCityIdBySuppliers = id;
      // this.currentCityIdBySuppliers = this.cityListChooseBySuppliers[id].id;
      return this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 50,
          cityCode: this.currentCityIdBySuppliers,
          mapStatus: map,
          pageNum: page,
          pageSize: pageSize,
          supplierCode: this.currentSupplierId,
          keyword:keyword
        })
        .then(rs => {
          this.listShow = false;
          this.hotelListChooseBySuppliersFilter = this.hotelListChooseBySuppliers = rs.data.body.statisticList;
          this.hotelTotalSuppliers = rs.data.body.total;
          if (this.hotelListChooseBySuppliers.length>0) {//适配同步刷新时本列表为空时提供后续流程的bool
            return true;
          }else{
            return false;
          }
        })
        .catch(err=>{
          this.listShow = false;
        });
    },
    //选择供应商侧城市列表审核状态
    chooseStatebySupplier(val) {
      if(this.chooseTabBySuppliers == 'suppliers')return;
      this.$store.commit("HOTEL_TABLETYPE", val);
      this.curPageSuppliers = 1;
      this.searchHotelBySuppliers = '';//重置酒店查询状态
      // console.log(this.currentCityIdBySuppliers)
      this.chooseCity(this.currentCityIdBySuppliers, val);
    },
    chooseHotel(index) {
      let isOverRange;
      if (this.searchHotelBySuppliers) {
        isOverRange = index > this.hotelListChooseBySuppliersFilter.length-1?true:false;
        
      } else {
        isOverRange = index > this.hotelListChooseBySuppliers.length-1?true:false;
        
      }
      if (index == -1 || isOverRange ) {//响应同步刷新酒店列表为空的情况
        this.$store.commit("HOTEL_CHECK_LIST", null);
        return this.getDataType = "supplier";
      }
      this.currentHotelIndexBySuppliers = index;
      var id = this.searchHotelBySuppliers?this.hotelListChooseBySuppliersFilter[index].id:this.hotelListChooseBySuppliers[index].id,
        name = this.searchHotelBySuppliers?this.hotelListChooseBySuppliersFilter[index].name:this.hotelListChooseBySuppliers[index].name;    
      if (this.checkStateBySuppliers == 10) {
        //未聚待审
        return this.$http
          .post(`/mapping/hotelMapping/list`, {
            cityCode: this.currentCityIdBySuppliers,
            supplierCode: this.currentSupplierId,
            hotelName: name,
            mapStatus: this.checkStateBySuppliers,
            sourceType: 20
          })
          .then(rs => {
            this.$store.commit("HOTEL_CHECK_LIST", rs.data.body||null);         
          });
      } else {     
        return this.$http
          .post(`/mapping/hotelMapping/list`, {
            cityCode: this.currentCityIdBySuppliers,
            supplierCode: this.currentSupplierId,
            hotelCode: id,
            mapStatus: this.checkStateBySuppliers,
            sourceType: 20            
          })
          .then(rs => {
            this.$store.commit("HOTEL_CHECK_LIST", rs.data.body||null);
            this.getDataType = "supplier";
          });
      }
    },

    //选择jd侧tab
    chooseNationCopy(index) {
      this.chooseTabByRegions = "province";
      this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 10,
          dimensionType: 30,
          countryCode: this.nationListChooseByRegions[index].id
        })
        .then(rs => {
          this.provinceListChooseByRegionsFilter =this.provinceListChooseByRegions = rs.data.body.statisticList;
        });
    },
    chooseProvinceCopy(index, map = 20) {
      this.chooseTabByRegions = "city";
      var provinceCode = this.searchProvinceByRegions?this.provinceListChooseByRegionsFilter[index].id:this.provinceListChooseByRegions[index].id;
      this.$http
        /* .get("/mapping/hotelMapping/navTabSearch", {params:{
          sourceType: 10,
          dimensionType: 40,
          provinceCode: this.provinceListChooseByRegions[id].id
        }}) */
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 10,
          dimensionType: 40,
          provinceCode: provinceCode
        })
        .then(rs => {
          this.cityListChooseByRegionsFilter = this.cityListChooseByRegions = rs.data.body.statisticList;
        });
    },

    chooseCityCopy(id, map = 20, page = 1, pageSize = 30, keyword = "") {
      this.listShow = true;
      this.chooseTabByRegions = "hotel";
      this.currentCityIdByRegions = id;
      return this.$http
        .post("/mapping/hotelMapping/navTabSearch", {
          sourceType: 10,
          dimensionType: 50,
          cityCode: this.currentCityIdByRegions,
          mapStatus: map,
          pageNum: page,
          pageSize: pageSize,
          keyword: keyword
        })
        .then(rs => {
          this.listShow = false;
          this.hotelListChooseByRegionsFilter = this.hotelListChooseByRegions = rs.data.body.statisticList;
          this.hotelTotalRegions = rs.data.body.total;
          if (this.hotelListChooseByRegions.length>0) {//适配同步刷新时本列表为空时提供后续流程的bool
            return true;
          }else{
            return false;
          }
        }).catch(err=>{
          this.listShow = false;
        });
      this.isCheckStateByRegionsShow = true;
    },
    //选择区域酒店列表审核状态
    chooseStatebyRegion(val) {
      if(this.chooseTabByRegions == 'nation')return;
      this.$store.commit("HOTEL_TABLETYPE", val);
      this.curPageRegions = 1;//重置页码
      this.searchHotelByRegions = '';//重置酒店查询内容
      this.chooseCityCopy(this.currentCityIdByRegions, val);
    },
    chooseHotelCopy(index) {
      var isOverRange;
      if (this.searchHotelByRegions) {
        isOverRange = index > this.hotelListChooseByRegionsFilter.length-1?true:false;        
      } else {
        isOverRange = index > this.hotelListChooseByRegions.length-1?true:false;        
      }
      if (index == -1 || isOverRange) {//响应同步刷新酒店列表为空的情况和最后一条数据已审为空的情况
        this.$store.commit("HOTEL_CHECK_LIST", null);
        return this.getDataType = "region";
      }
      this.currentHotelIndexByRegions = index;
      var id = this.searchHotelByRegions?this.hotelListChooseByRegionsFilter[index].id : this.hotelListChooseByRegionsFilter[index].id,
        name = this.searchHotelByRegions?this.hotelListChooseByRegionsFilter[index].name : this.hotelListChooseByRegions[index].name;
      if (this.checkStateByRegions == 10) {
        //未聚待审
        return this.$http
          .post(`/mapping/hotelMapping/list`, {
            cityId: this.currentCityIdByRegions,
            hotelName: name,
            mapStatus: this.checkStateByRegions,
            sourceType: 10
          })
          .then(rs => {
            if(rs.data.head.code !== "200"){
              var msg = rs.data.head.message;
              return this.$Notice.warning({
                title: msg,
              });
            }
            this.$store.commit("HOTEL_CHECK_LIST", rs.data.body||null);
          });
      } else {
        return this.$http
          .post(`/mapping/hotelMapping/list`, {
            hotelId: id,
            mapStatus: this.checkStateByRegions,
            sourceType: 10
          })
          .then(rs => {
            this.$store.commit("HOTEL_CHECK_LIST", rs.data.body||null);
            this.getDataType = "region";
          });
      }
    },
    //按城市名和id查询
    searchHotel(keywords,num=1,size=30) {
      if(num == 1){
        this.searchInputCache = keywords;
        this.curPageRegions = 1;
      }
      if (keywords == "") {
        this.$Notice.warning({
          title: "请输入查询内容",
          desc: "查询内容不能为空"
        });
        return;
      }
      this.isCheckStateByRegionsShow = false;//关掉选择框
      this.checkStateByRegions = 20;//重置为待审状态，已应用数据提交格式
      if (this.searchID === "hotelId") {
        if (!/^[0-9]*$/.test(keywords)) {
          this.$Notice.warning({
            title: "请输入正确的酒店id",
            desc: "请输入数字id"
          });
          return;
        }
        this.listShow = true;
        this.$http
          .get(
            `/mapping/hotelMapping/navSearch`,{params:{
              keyword:keywords,
              type:1,
              pageNum:num,
              pageSize:size
            }}
          )
          .then(rs => {
            this.hotelTotalRegions = rs.data.body.total;
            this.hotelListChooseByRegionsFilter = this.hotelListChooseByRegions = rs.data.body.statisticList;
             if (rs.data.head.code == 200&&!this.hotelListChooseByRegions.length) {
              this.$Notice.warning({
                title: "没有找到查询结果",
                desc: "请重新输入查询条件"
              });
            }
          })
          .then(rs => {
            this.listShow = false;
            this.btnType = "region";
            this.chooseTabByRegions = "hotel";
          });
      } else {
        if (
          // !(/^[\u4E00-\u9FA5]+$/.test(keywords)) ||
          keywords === "酒店"
        ) {
          this.$Notice.warning({
            title: "请输入正确的酒店名称",
            desc: '需要输入中文和英文的酒店名称关键字，注意不能只输入"酒店"'
          });
          return;
        }
        this.listShow = true;
        this.$http
          .get(
            `/mapping/hotelMapping/navSearch`,{params:{
              keyword:keywords,
              type:2,
              pageNum:num,
              pageSize:size
            }},
          ).then(rs => {
            this.hotelListChooseByRegionsFilter = this.hotelListChooseByRegions = rs.data.body.statisticList;
            this.hotelTotalRegions = rs.data.body.total;
             if (rs.data.head.code == 200&&!this.hotelListChooseByRegions.length) {
              this.$Notice.warning({
                title: "没有找到查询结果",
                desc: "请重新输入查询条件"
              });
            }
          })
          .then(rs => {
            this.listShow = false;            
            this.btnType = "region";
            this.chooseTabByRegions = "hotel";
          });
      }
    }
  }
};
</script>