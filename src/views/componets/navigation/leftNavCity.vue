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
          <Row>
            <Input v-model="searchSupplier" placeholder="输入关键词查询" @on-change="doSupplierListFilter"></Input>
          </Row>
          <Menu theme="light" width="auto" @on-select="chooseSupplier" ref="supplierMenu" :active-name="supplierMenuSelect">
            <MenuItem :name="index" v-for="(item,index) in supplierListFilter" :key="index">
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
            <Select v-model="checkStateBySuppliers" @on-change="chooseStatebySupplier">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCity">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row type="flex" justify="center">
            <!-- <Page :total="cityTotalSuppliers" size="small" show-total></Page> -->
            <span>共计{{cityTotalSuppliers}}条</span>
          </Row>
        </TabPane>
      </Tabs>

      <!-- 区域 -->
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='region'" v-model="chooseTabByRegions">
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
          <Row class="check-select" v-show="isCheckStateByRegionsShow">
            <Select v-model="checkStateByRegions" @on-change="chooseStatebyRegion">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseCityCopy" >
              <MenuItem :name="index" v-for="(item,index) in cityListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
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
      searchInput: "",
      searchSupplier: "",

      //供应商和区域选择按钮是supplier/region
      btnType: "supplier",
      //最后一次数据获取是supplier/region
      getDataType:"supplier",
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
      listShow:false,
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
          label: "未聚未审"
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
      //jd侧省份列表
      provinceListChooseByRegions: [],
      //供应商侧城市列表
      cityListChooseBySuppliers: [],
      //jd侧城市列表
      cityListChooseByRegions: []
    };
  },
  watch: {
    citySyncMappingDataState: function(val, old) {
      // console.log(val,old)
      if(val)this.refreshData();
    }
  },
  mounted: function() {
    this.$http
      .post("/mapping/cityMapping/navtabsearch", {
        sourceType: 10,
        dimensionType: 10,
        times: 7
      })
      .then(rs => {
        this.supplierList = rs.data.body;
      })
      .then(rs => {
        this.doSupplierListFilter();
      });
    this.$http
      .post("/mapping/cityMapping/navtabsearch", {
        sourceType: 20,
        dimensionType: 20,
        times: 1
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
      return this.cityListChooseBySuppliers.length;
    },
    cityTotalRegions() {
      return this.cityListChooseByRegions.length;
    },
    citySyncMappingDataState(){
      return this.$store.getters.citySyncMappingDataState;
    }
  },
  methods: {
    changeState(){
      this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE');      
    },
    //列表和表格同步更新数据
    refreshData(){
      this.btnType = this.getDataType
      this.listShow = true
      if(this.getDataType == 'supplier'){
        this.chooseTabBySuppliers = 'city'
        this.chooseProvince(this.currentProvinceIdBySuppliers,this.checkStateBySuppliers).then(rs=>{
          this.listShow = false
          return this.chooseCity(this.currentCityIndexBySuppliers)
        }).then(rs=>{
          this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE');
        })
      }else{
        this.chooseTabByRegions = 'city'
        this.chooseProvinceCopy(this.currentProvinceIdByRegions, this.checkStateByRegions).then(rs=>{
          this.listShow = false
          return this.chooseCityCopy(this.currentCityIndexByRegions)
        }).then(rs=>{
          this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE');
        })
      }
    },
    doSupplierListFilter() {
      let arr = [];
      if (this.searchSupplier == "")
        return (this.supplierListFilter = this.supplierList);
      this.supplierList.map((val, index) => {
        if (val.name.indexOf(this.searchSupplier) > -1) {
          arr.push(val);
        }
      });
      this.supplierListFilter = arr;
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
      if(name == 'suppliers')this.supplierMenuSelect = 1;
    },
    //选择供应商tab下的列表内容
    chooseSupplier(id) {
      this.chooseTabBySuppliers = "nation";
      // console.log(this.$refs.supplierMenu.updateActiveName)
      // this.$refs.supplierMenu.updateActiveName();
      // console.log(id,this.supplierMenuSelect)
      this.currentSupplierId = id;
      this.$http
        .post("/mapping/cityMapping/navtabsearch", {
          sourceType: 20,
          dimensionType: 20,
          supplierCode: id,
          times: 1
        })
        .then(rs => {
          this.nationListChooseBySuppliers = rs.data.body;
        });
    },
    chooseNation(id) {
      this.chooseTabBySuppliers = "province";
      this.$http
        .post("/mapping/cityMapping/navtabsearch", {
          sourceType: 20,
          dimensionType: 30,
          countryCode: id
        })
        .then(rs => {
          this.provinceListChooseBySuppliers = rs.data.body;
        });
    },
    chooseProvince(id, map = 20) {
      this.currentProvinceIdBySuppliers = id;
      this.chooseTabBySuppliers = "city";
      const promise = this.$http
        .post("/mapping/cityMapping/navtabsearch", {
          sourceType: 20,
          dimensionType: 40,
          provinceCode: id,
          mapStatus: map
        })
        .then(rs => {
          this.cityListChooseBySuppliers = rs.data.body;
        });
        return promise;
    },
    //选择供应商侧城市列表审核状态
    chooseStatebySupplier(val) {
      this.$store.commit("CITY_TABLETYPE", val);
      this.chooseProvince(this.currentProvinceIdBySuppliers, val);
    },
    chooseCity(index) {
      this.currentCityIndexBySuppliers = index;
      let id = this.cityListChooseBySuppliers[index].id;
      return this.$http
        .get(
          `/mapping/cityMapping/list?cityCode=${id}&supplierCode=${this
            .currentSupplierId}&mapStatus=${this.checkStateBySuppliers}`
        )
        .then(rs => {
          this.$store.commit("CITY_CHECK_LIST", rs.data.body);
          this.getDataType = 'supplier'
        });
    },

    //选择jd侧tab
    chooseNationCopy(id) {
      this.chooseTabByRegions = "province";
      this.$http
        .post("/mapping/cityMapping/navtabsearch", {
          sourceType: 10,
          dimensionType: 30,
          countryCode: id
        })
        .then(rs => {
          this.provinceListChooseByRegions = rs.data.body;
        });
    },
    chooseProvinceCopy(id, map = 20) {
      this.chooseTabByRegions = "city";
      this.currentProvinceIdByRegions = id;
      const promise = this.$http
        .post("/mapping/cityMapping/navtabsearch", {
          sourceType: 10,
          dimensionType: 40,
          provinceCode: id,
          mapStatus: map
        })
        .then(rs => {
          this.cityListChooseByRegions = rs.data.body;
        });
      this.isCheckStateByRegionsShow = true;
      return promise;
    },
    //选择区域城市列表审核状态
    chooseStatebyRegion(val) {
      this.$store.commit("CITY_TABLETYPE", val);
      this.chooseProvinceCopy(this.currentProvinceIdByRegions, val);
    },
    chooseCityCopy(index) {
      this.currentCityIndexByRegions = index;
      var id = this.cityListChooseByRegions[index].id,
          name = this.cityListChooseByRegions[index].name;
      if (this.checkStateByRegions == 10) {
        //未聚待审
      var  promise = this.$http
          .get(
            `/mapping/cityMapping/list?provinceId=${this
              .currentProvinceIdByRegions}&cityName=${name}&mapStatus=${this
              .checkStateByRegions}`
          )
          .then(rs => {
            this.$store.commit("CITY_CHECK_LIST", rs.data.body);
            this.getDataType = 'region'
          });
      } else {
        promise = this.$http
          .get(
            `/mapping/cityMapping/list?cityId=${id}&mapStatus=${this
              .checkStateByRegions}`
          )
          .then(rs => {
            this.$store.commit("CITY_CHECK_LIST", rs.data.body);
            this.getDataType = 'region'            
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
        this.$http
          .get(`/mapping/cityMapping/navSearch?cityId=${this.searchInput}`)
          .then(rs => {
            this.cityListChooseByRegions = rs.data.body;
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
            desc: '不能只输入一个"市"字'
          });
          return;
        }
        this.$http
          .get(`/mapping/cityMapping/navSearch?cityName=${this.searchInput}`)
          .then(rs => {
            if (!this.cityListChooseByRegions.length) {
              this.$Notice.warning({
                title: "没有找到响应结果",
                desc: "请重新输入查询条件"
              });
            }
            this.cityListChooseByRegions = rs.data.body;
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


