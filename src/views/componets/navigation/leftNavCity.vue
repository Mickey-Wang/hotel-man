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
      <Button type="primary" shape="circle" icon="ios-search" @click="searchCity"></Button>
      <!-- <Button type="dashed" shape="circle" icon="ios-refresh" @click="changeState"></Button> -->
      </Col>
    </Row>
    <Row>
      <ButtonGroup size="large" style="width:100%">
        <Button :type="btnTypesupplier" style="width:50%" @click="btnSupplier">按供应商审核</Button>
        <Button :type="btnTypeRegion" style="width:50%" @click="btnRegion">按区域审核</Button>
      </ButtonGroup>
    </Row>
    <Row style="height:88%;position:relative;">
      <Spin size="large" fix v-if="listShow"></Spin>
      <!-- 供应商 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='supplier'" v-model="chooseTabBySuppliers" @on-click="doClickSupplierTab">
        <TabPane label="供应商" name="suppliers" :disabled="supplierTabDisable[0]">
          <Row v-if="supplierList.length>20">
            <Input v-model="searchSupplier" placeholder="输入关键词查询" @on-change="doListFilter(searchSupplier,'supplierList','supplierListFilter')"></Input>
          </Row>
          <Menu theme="light" width="auto" @on-select="chooseSupplier" ref="supplierMenu"><!--:active-name="supplierMenuSelect"-->
            <MenuItem :name="index" v-for="(item,index) in supplierListFilter" :key="index">
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
            <MenuItem :name="item.id" v-for="(item,index) in nationListChooseBySuppliers" :key="index">
            <span>{{item.name}}</span>
            <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
            </MenuItem>
          </Menu>
          <Row class-name="bottom-total">
            <span>共计{{nationListChooseBySuppliers.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="省份" style="height:94%" name="province" :disabled="supplierTabDisable[2]">
          <Row v-if="provinceListChooseBySuppliers.length>20">
            <Input v-model="searchProvinceBySuppliers" placeholder="输入关键词查询" @on-change="doListFilter(searchProvinceBySuppliers,'provinceListChooseBySuppliers','provinceListChooseBySuppliersFilter')"></Input>
          </Row>
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvince">
              <MenuItem :name="item.id" v-for="(item,index) in provinceListChooseBySuppliersFilter" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseBySuppliersFilter.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" style="height:94%" name="city" :disabled="supplierTabDisable[3]">
          <Row class="check-select">
            <Select v-model="checkStateBySuppliers" @on-change="chooseStatebySupplier">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row v-if="cityListChooseBySuppliers.length>20">
            <Input v-model="searchCityBySuppliers" placeholder="输入关键词查询" @on-change="doListFilter(searchCityBySuppliers,'cityListChooseBySuppliers','cityListChooseBySuppliersFilter')"></Input>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCity" v-if="cityListChooseBySuppliersFilter.length>0">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseBySuppliersFilter" :key="index">
              <span>{{item.name}}</span>
              <!-- <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span> -->
              </MenuItem>
            </Menu>
            <Row v-else style="font-size:18px;text-align:center;">
              暂无数据
            </Row>
          </Row>
          <Row type="flex" justify="center">
            <!-- <Page :total="cityTotalSuppliers" size="small" show-total></Page> -->
            <span>共计{{cityTotalSuppliers}}条</span>
          </Row>
        </TabPane>
      </Tabs>

      <!-- 区域 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='region'" v-model="chooseTabByRegions" @on-click="doClickRegionTab">
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
              <MenuItem :name="item.id" v-for="(item,index) in provinceListChooseByRegionsFilter" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegionsFilter.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" style="height:94%" name="city" :disabled="regionTabDisable[2]">
          <Row class="check-select" v-show="isCheckStateByRegionsShow">
            <Select v-model="checkStateByRegions" @on-change="chooseStatebyRegion">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row v-if="cityListChooseByRegions.length>20">
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
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCityCopy" v-if="cityListChooseByRegions.length>0">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseByRegionsFilter" :key="index">
              <span>{{item.name||item.cityName}}</span>
              <span v-if="checkStateByRegions == 10">{{`${item.unmatchedCount||"0"}`}}</span>
              <span v-else>{{`${item.matchedCount+"/"||"0"}${item.matchedUncheckCount||"0"}`}}</span>
              </MenuItem>
            </Menu>
            <Row v-else style="font-size:18px;text-align:center;">
              暂无数据
            </Row>
          </Row>
          <Row type="flex" justify="center">
            <!-- <Page :total="cityTotalRegions" size="small" show-total></Page> -->
            <span>共计{{cityTotalRegions}}条</span>            
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
      searchID: "cityId",
      //选项内容
      searchCondition: [
        {
          value: "cityId",
          label: "城市id"
        },
        {
          value: "cityName",
          label: "城市名称"
        }
      ],
      //搜索框内容
      searchInput: "",//快速查询入口
      searchSupplier: "",//供应商筛选入口
      searchProvinceBySuppliers:'',//供应商侧省份筛选入口
      searchProvinceByRegions:'',//jd侧省份筛选入口
      searchCityBySuppliers:'',//供应商侧城市筛选入口
      searchCityeByRegions:'',//jd侧城市筛选入口

      //供应商和区域选择按钮是supplier/region
      btnType: "supplier",
      //最后一次数据获取是supplier/region
      getDataType: "supplier",
      //当前供应商选项卡选中项目
      chooseTabBySuppliers: "",
      //当前区域选项卡选中项目
      chooseTabByRegions: "",
      //供应商选项是否不可用
      supplierTabDisable: [false, true, true, true],
      //区域选项是否不可用
      regionTabDisable: [false, true, true],

      //供应商选项卡选中项目
      supplierMenuSelect: 0,
      listShow: false,
      //城市三种状态id
      checkStateBySuppliers: 20,
      checkStateByRegions: 20,
      //是否显示区域审核城市状态选择
      isCheckStateByRegionsShow: true,
      //城市三种状态内容
      cityCondition: [
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
      currentCityIndexBySuppliers: 0,
      currentCityIndexByRegions: 0,
      //供应商列表
      supplierList: [],
      supplierListFilter: [],
      //供应商侧国家列表
      nationListChooseBySuppliers: [],
      //jd侧国家列表
      nationListChooseByRegions: [],
      //供应商侧省份列表
      provinceListChooseBySuppliers: [],
      provinceListChooseBySuppliersFilter:[],
      //jd侧省份列表
      provinceListChooseByRegions: [],
      provinceListChooseByRegionsFilter: [],
      //供应商侧城市列表
      cityListChooseBySuppliers: [],
      cityListChooseBySuppliersFilter: [],
      //jd侧城市列表
      cityListChooseByRegions: [],
      cityListChooseByRegionsFilter: [],
    };
  },
  watch: {
    citySyncMappingDataState: function(val, old) {
      // console.log(val,old)
      if (val) this.refreshData();
    }
  },
  mounted: function() {
    this.$http
      /* .get("/mapping/cityMapping/navTabSearch", {params:{
        sourceType: 20,
        dimensionType: 10,
        //times: 7
      }}) */
      .post("/mapping/cityMapping/navTabSearch", {
        sourceType: 20,
        dimensionType: 10
        //times: 7
      }) //{headers:{'content-type':'application/x-www-form-urlencoded'}}
      .then(rs => {
        this.supplierListFilter = this.supplierList = rs.data.body;
      })
      .catch(err => {
        this.supplierList = [];
      });
    this.$http
      .post("/mapping/cityMapping/navTabSearch", {
        sourceType: 10,
        dimensionType: 20
        //times: 1
      })
      .then(rs => {
        this.nationListChooseByRegions = rs.data.body;
      });
  },
  computed: {
    btnTypesupplier() {
      return this.btnType == "supplier" ? "primary" : "ghost";
    },
    btnTypeRegion() {
      return this.btnType == "region" ? "primary" : "ghost";
    },
    cityTotalSuppliers() {
      return this.cityListChooseBySuppliersFilter?this.cityListChooseBySuppliersFilter.length:0;
    },
    cityTotalRegions() {
      return this.cityListChooseByRegionsFilter?this.cityListChooseByRegionsFilter.length:0;
    },
    citySyncMappingDataState() {
      return this.$store.getters.citySyncMappingDataState;
    }
  },
  methods: {
    //重新请求tab1方法
    reset(status){
      if (status == 'suppliers') {
        this.$http
        /* .get("/mapping/cityMapping/navTabSearch", {params:{
          sourceType: 20,
          dimensionType: 10,
          //times: 7
        }}) */
        .post("/mapping/cityMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 10
          //times: 7
        }) //{headers:{'content-type':'application/x-www-form-urlencoded'}}
        .then(rs => {
          this.supplierListFilter = this.supplierList = rs.data.body;
        })
        .then(rs=>{
          this.checkStateBySuppliers = 20;
          this.$store.commit("CITY_TABLETYPE", 20); //将数据状态重置为20          
        })
        .catch(err => {
          this.supplierList = [];
        });
        
      } else {
        this.$http
          .post("/mapping/cityMapping/navTabSearch", {
            sourceType: 10,
            dimensionType: 20
            //times: 1
          })
          .then(rs => {
            this.nationListChooseByRegions = rs.data.body;
          })
          .then(rs=>{
            this.checkStateByRegions = 20;
            this.$store.commit("CITY_TABLETYPE", 20); //将数据状态重置为20      
          });
        
      }
    },
    changeState() {
      this.$store.commit("CITY_SYNC_MAPPING_DATA_STATE");
    },
    //列表和表格同步更新数据
    refreshData() {
      this.btnType = this.getDataType;
      this.listShow = true;
      if (this.getDataType == "supplier") {
        this.chooseTabBySuppliers = "city";
        this.chooseProvince(
          this.currentProvinceIdBySuppliers,
          this.checkStateBySuppliers
        )
          .then(rs => {
            this.listShow = false;
            if (rs) {//上一步请求为空时rs为false
              return this.chooseCity(this.currentCityIndexBySuppliers);
            }else{
              return this.chooseCity(-1);//传入-1自动响应停止请求数据的情况
            }
          })
          .then(rs => {
            this.$store.commit("CITY_SYNC_MAPPING_DATA_STATE");
          });
      } else {
        this.chooseTabByRegions = "city";
        this.chooseProvinceCopy(
          this.currentProvinceIdByRegions,
          this.checkStateByRegions
        )
          .then(rs => {
            this.listShow = false;
            if (rs) {
              return this.chooseCityCopy(this.currentCityIndexByRegions);
            }else{
              return this.chooseCityCopy(-1);//传入-1自动响应停止请求数据的情况           
            }
          })
          .then(rs => {
            this.$store.commit("CITY_SYNC_MAPPING_DATA_STATE");
          });
      }
    },
    //筛选
    listFilter(keywords,searchArr){
      let resultArr = [];
      if (keywords == ""){
        resultArr = searchArr;
        return resultArr;
      }
      searchArr.map((val, index) => {
        if (val.name.indexOf(keywords) > -1) {
          resultArr.push(val);
        }
      });
      return resultArr;
    },
    doListFilter(keywords,searchArr,filterArr) {
      this[filterArr] = this.listFilter(keywords,this[searchArr]);
    },
    //点击供应商审核tab
    //按钮选择
    btnSupplier() {
      this.btnType = "supplier";
      this.$store.commit("CITY_TABLETYPE", 20); //将数据状态重置为20
    },
    btnRegion() {
      this.$store.commit("CITY_TABLETYPE", 20);
      this.btnType = "region";
    },
    //选择供应商tab
    doClickSupplierTab(name) {
      // console.log(name)
      if (name == "suppliers"){
        this.searchSupplier = "";//供应商筛选入口
        this.searchProvinceBySuppliers = '';//供应商侧省份筛选入口
        this.searchCityBySuppliers = '';//供应商侧城市筛选入口
        this.searchHotelBySuppliers = '';//供应商侧酒店筛选入口
        this.checkStateBySuppliers = 20;
        this.reset('suppliers');
      }
    },
    //选择区域tab
    doClickRegionTab(name){
      if (name == "nation"){
        this.searchProvinceByRegions = '';//jd侧省份筛选入口
        this.searchCityeByRegions = '';//jd侧城市筛选入口
        this.searchHotelByRegions = '';//jd侧酒店筛选入口
        this.reset('regions')
        this.checkStateByRegions = 20;
      }
    },
    //选择供应商tab下的列表内容
    chooseSupplier(id) {
      this.chooseTabBySuppliers = "nation";
      // console.log(this.$refs.supplierMenu.updateActiveName)
      // this.$refs.supplierMenu.updateActiveName();
      // console.log(id,this.supplierMenuSelect)
      this.currentSupplierId = this.supplierList[id].id;
      this.$http
        .post("/mapping/cityMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 20,
          supplierCode: this.supplierList[id].id,
          times: 1
        })
        .then(rs => {
          this.nationListChooseBySuppliers = rs.data.body;
        });
    },
    chooseNation(id) {
      this.chooseTabBySuppliers = "province";
      this.$http
        .post("/mapping/cityMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 30,
          countryCode: id,
          supplierCode: this.currentSupplierId
        })
        .then(rs => {
          this.provinceListChooseBySuppliersFilter = this.provinceListChooseBySuppliers = rs.data.body;
        });
    },
    chooseProvince(id, map = 20) {
      this.currentProvinceIdBySuppliers = id;
      this.chooseTabBySuppliers = "city";
      const promise = this.$http
        .post("/mapping/cityMapping/navTabSearch", {
          sourceType: 20,
          dimensionType: 40,
          provinceCode: id,
          mapStatus: map,
          supplierCode: this.currentSupplierId
        })
        .then(rs => {
          this.cityListChooseBySuppliersFilter = this.cityListChooseBySuppliers = rs.data.body || [];
          if (this.cityListChooseBySuppliers.length>0) {//适配同步刷新时本列表为空时提供后续流程的bool
            return true;
          }else{
            return false;
          }
        });
      return promise;
    },
    //选择供应商侧城市列表审核状态
    chooseStatebySupplier(val) {
      if(this.chooseTabBySuppliers == "suppliers")return;
      this.$store.commit("CITY_TABLETYPE", val);
      this.chooseProvince(this.currentProvinceIdBySuppliers, val);
    },
    chooseCity(index) {
      if (index == -1) {//响应同步刷新城市列表为空的情况
        this.$store.commit("CITY_CHECK_LIST", null);//同步刷新
        return this.getDataType = "supplier";
      }
      this.currentCityIndexBySuppliers = index;
      var id = this.searchCityBySuppliers?this.cityListChooseBySuppliersFilter[index].id:this.cityListChooseBySuppliers[index].id;
      return this.$http
        .post(`/mapping/cityMapping/queryCityApprovalList`, {
          cityCode: id,
          supplierCode: this.currentSupplierId,
          mapStatus: this.checkStateBySuppliers,
          sourceType:20
        })
        .then(rs => {
          this.$store.commit("CITY_CHECK_LIST", rs.data.body);
          this.getDataType = "supplier";
        });
    },

    //选择jd侧tab
    chooseNationCopy(id) {
      this.chooseTabByRegions = "province";
      this.$http
        .post("/mapping/cityMapping/navTabSearch", {
          sourceType: 10,
          dimensionType: 30,
          countryCode: id
        })
        .then(rs => {
          this.provinceListChooseByRegionsFilter = this.provinceListChooseByRegions = rs.data.body;
        });
    },
    chooseProvinceCopy(id, map = 20) {
      this.chooseTabByRegions = "city";
      this.currentProvinceIdByRegions = parseInt(id);
      const promise = this.$http
        .post("/mapping/cityMapping/navTabSearch", {
          sourceType: 10,
          dimensionType: 40,
          provinceCode: id,
          mapStatus: map
        })
        .then(rs => {
          this.cityListChooseByRegionsFilter = this.cityListChooseByRegions = rs.data.body || [];
          if (this.cityListChooseByRegions.length>0) {//适配同步刷新时本列表为空时提供后续流程的bool
            return true
          }else{
            return false
          }
        });
      this.isCheckStateByRegionsShow = true;
      return promise;
    },
    //选择区域城市列表审核状态
    chooseStatebyRegion(val) {
      if(this.chooseTabByRegions == 'nation')return;
      this.$store.commit("CITY_TABLETYPE", val);
      this.chooseProvinceCopy(this.currentProvinceIdByRegions, val);
    },
    chooseCityCopy(index) {
      if (index == -1) {//响应同步刷新城市列表为空的情况
        this.$store.commit("CITY_CHECK_LIST", null);
        return this.getDataType = "region";
      }
      this.currentCityIndexByRegions = index;
      if (this.searchCityeByRegions) {
        var id = this.cityListChooseByRegionsFilter[index].id||this.cityListChooseByRegionsFilter[index].cityId,
          name = this.cityListChooseByRegionsFilter[index].name||this.cityListChooseByRegionsFilter[index].cityName;
        
      } else {
        var id = this.cityListChooseByRegions[index].id||this.cityListChooseByRegions[index].cityId,
          name = this.cityListChooseByRegions[index].name||this.cityListChooseByRegions[index].cityName;
      }
      if (this.checkStateByRegions == 10) {
        //未聚待审
        var promise = this.$http
          .post(`/mapping/cityMapping/queryCityApprovalList`, {
            provinceId: this.currentProvinceIdByRegions,
            cityName: name,
            mapStatus: this.checkStateByRegions,
            sourceType:10
          })
          .then(rs => {
            this.$store.commit("CITY_CHECK_LIST", rs.data.body||null);
            this.getDataType = "region";
          });
      } else {
        promise = this.$http
          .post(`/mapping/cityMapping/queryCityApprovalList`, {
            cityId: id,
            mapStatus: this.checkStateByRegions,
            sourceType:10
          })
          .then(rs => {
            this.$store.commit("CITY_CHECK_LIST", rs.data.body||null);
            this.getDataType = "region";
          });
      }
      return promise;
    },
    //按城市名和id查询
    searchCity() {
      if (this.searchInput == "") {
        this.$Notice.warning({
          title: "请输入查询内容",
          desc: "查询内容不能为空"
        });
        return;
      }
      this.isCheckStateByRegionsShow = false;
      if (this.searchID === "cityId") {
        if (!/^[0-9]*$/.test(this.searchInput)) {
          this.$Notice.warning({
            title: "请输入正确的城市id",
            desc: "请输入数字id"
          });
          return;
        }
        this.listShow = true;              
        this.$http
          .get(`/mapping/cityMapping/navSearch?cityId=${this.searchInput}`)
          .then(rs => {
            this.listShow = false;
            
            if (Array.isArray(rs.data.body)) {
              this.cityListChooseByRegionsFilter = this.cityListChooseByRegions = rs.data.body || [];
            }else{
              this.cityListChooseByRegionsFilter = this.cityListChooseByRegions = rs.data.body?[rs.data.body]:[];
            }
            if (rs.data.head.code == 200&&!this.cityListChooseByRegions.length) {
              this.$Notice.warning({
                title: "没有找到响应结果",
                desc: "请重新输入查询条件"
              });
            }
          })
          .then(rs => {
            this.btnType = "region";
            this.chooseTabByRegions = "city";
          });
      } else {
        if (
          !/^[\u4E00-\u9FA5]{1,9}$/.test(this.searchInput) ||
          this.searchInput === "市"
        ) {
          this.$Notice.warning({
            title: "请输入正确的城市名称",
            desc: '需输入正确的中文名称,注意不能只输入一个"市"字'
          });
          return;
        }
        this.listShow = true;              
        this.$http
          .get(`/mapping/cityMapping/navSearch?cityName=${this.searchInput}`)
          .then(rs => {
            this.listShow = false;            
            if (Array.isArray(rs.data.body)) {
              this.cityListChooseByRegionsFilter = this.cityListChooseByRegions = rs.data.body || [];
            }else{
              this.cityListChooseByRegionsFilter = this.cityListChooseByRegions = rs.data.body?[rs.data.body]:[];
            }
            if (rs.data.head.code == 200&&!this.cityListChooseByRegions.length) {
              this.$Notice.warning({
                title: "没有找到响应结果",
                desc: "请重新输入查询条件"
              });
            }
          })
          .then(rs => {
            this.btnType = "region";
            this.chooseTabByRegions = "city";
          })
          .catch(err => {
            this.$Notice.error({
              title: "接口异常",
              desc: "请稍后再试"
            });
          });
      }
    }
  }
};
</script>


