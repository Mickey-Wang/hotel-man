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
      <Button type="primary" shape="circle" icon="ios-search" @click="searchHotel"></Button>
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
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvince">
              <MenuItem :name="index" v-for="(item,index) in provinceListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" name="city" :disabled="supplierTabDisable[3]">
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseCity">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{cityListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="酒店" style="height:100%" name="hotel" :disabled="supplierTabDisable[4]">
          <Row class="check-select">
            <Select v-model="checkStateBySuppliers" @on-change="chooseStatebySupplier">
              <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseHotel('region')">
              <MenuItem :name="item.id" v-for="(item,index) in hotelListChooseBySuppliers" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
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
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseProvinceCopy">
              <MenuItem :name="index" v-for="(item,index) in provinceListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{provinceListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="城市" name="city" :disabled="regionTabDisable[2]">
          <Row class-name="menu-box-large">
            <Menu theme="light" width="auto" @on-select="chooseCityCopy">
              <MenuItem :name="index" v-for="(item,index) in cityListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
              </MenuItem>
            </Menu>
          </Row>
          <Row class-name="bottom-total">
            <span>共计{{cityListChooseByRegions.length}}条</span>
          </Row>
        </TabPane>
        <TabPane label="酒店" style="height:100%" name="hotel" :disabled="regionTabDisable[3]">
          <Row class="check-select">
            <Select v-model="checkStateByRegions" v-show="isCheckStateByRegionsShow" @on-change="chooseStatebyRegion">
              <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Row class-name="menu-box">
            <Menu theme="light" width="auto" @on-select="chooseHotelCopy">
              <MenuItem :name="item.id" v-for="(item,index) in hotelListChooseByRegions" :key="index">
              <span>{{item.name}}</span>
              <span>{{`${item.matchedCount}/${item.matchedUncheckCount}/${item.unmatchedCount}`}}</span>
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
      searchID: 'hotelId',
      //选项内容
      searchCondition: [
        {
          value: 'hotelId',
          label: "酒店id"
        },
        {
          value: "hotelName",
          label: "酒店名称"
        }
      ],
      //搜索框内容
      searchInput: "",

      //供应商区域按钮
      btnType: "supplier",
      //当前供应商选项卡
      chooseBySuppliers: "",
      //当前区域选项卡
      chooseByRegions: "",
      //供应商选项是否不可用
      supplierTabDisable: [false, true, true, true, true],
      //区域选项是否不可用
      regionTabDisable: [false, true, true, true],

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
          label: "未聚未审"
        }
      ],
      //当前选中的
      //供应商id
      currentSupplierId:0,
      //省份id
      currentProvinceIdBySuppliers:0,
      currentProvinceIdByRegions:0,
      currentCityIdBySuppliers:0,
      currentCityIdByRegions:0,
      currentHotelIdBySuppliers:0,
      //城市数据
      supplierList: [],
      nationListChooseBySuppliers: [],
      nationListChooseByRegions: [],
      provinceListChooseBySuppliers: [],
      provinceListChooseByRegions: [],
      cityListChooseBySuppliers: [],
      cityListChooseByRegions: [],
      hotelListChooseBySuppliers: [],
      hotelListChooseByRegions: [],
    };
  },
  mounted: function() {
    this.$http
      .post("resource/hotelmapping/navtabsearch", {
        souceType: 20,
        dimensionType: 10,
        times: 7
      })
      .then(rs => {
        this.supplierList = rs.data.body;
      });
    this.$http
      .post("resource/hotelmapping/navtabsearch", {
        souceType: 10,
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
    hotelTotalSuppliers() {
      return this.hotelListChooseBySuppliers.length;
    },
    hotelTotalRegions() {
      return this.hotelListChooseByRegions.length;
    }
  },
  methods: {
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
    chooseSupplier(id) {
      this.chooseBySuppliers = "nation";
      this.currentSupplierId = id;
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 20,
          dimensionType: 20,
          supplierCode: id,
          times: 1
        })
        .then(rs => {
          this.nationListChooseBySuppliers = rs.data.body;
        });
    },
    chooseNation(id) {
      this.chooseBySuppliers = "province";
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 20,
          dimensionType: 30,
          countryCode: id
        })
        .then(rs => {
          this.provinceListChooseBySuppliers = rs.data.body;
        });
    },
    chooseProvince(id) {
      this.chooseBySuppliers = "city";
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 20,
          dimensionType: 40,
          provinceCode: id,
        })
        .then(rs => {
          this.cityListChooseBySuppliers = rs.data.body;
        });
    },
    chooseCity(id, map = 20) {
      this.chooseBySuppliers = "hotel";
      this.currentCityIdBySuppliers = id;
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 20,
          dimensionType: 50,
          cityCode: id,
          mapStatus: map
        })
        .then(rs => {
          this.hotelListChooseBySuppliers = rs.data.body;
        });
    },
    //选择供应商侧城市列表审核状态
    chooseStatebySupplier(val) {
      this.$store.commit("HOTEL_TABLETYPE", val);
      this.chooseCity(this.currentCityIdBySuppliers, val);
    },
    chooseHotel(id){
      this.$http
        .get(
          `/resource/hotelMapping/list?cityCode=${this.currentCityIdBySuppliers}&supplierCode=${this
            .currentSupplierId}&hotelCode=${id}`
        )
        .then(rs => {
          this.$store.commit("HOTEL_CHECK_LIST", rs.data.body);
        });
    },

    //选择jd侧tab
    chooseNationCopy(id) {
      this.chooseByRegions = "province";
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 10,
          dimensionType: 30,
          countryCode: id
        })
        .then(rs => {
          this.provinceListChooseByRegions = rs.data.body;
        });
    },
    chooseProvinceCopy(id, map = 20) {
      this.chooseByRegions = "city";
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 10,
          dimensionType: 40,
          provinceCode: id,
        })
        .then(rs => {
          this.cityListChooseByRegions = rs.data.body;
        });
    },

    chooseCityCopy(id,map=20) {
      this.chooseByRegions = "hotel";
      this.currentCityIdByRegions = id;
      this.$http
        .post("/resource/hotelMapping/navtabsearch", {
          souceType: 10,
          dimensionType: 50,
          cityCode: id,
          mapStatus: map
        })
        .then(rs => {
          this.hotelListChooseByRegions = rs.data.body;
        });
      this.isCheckStateByRegionsShow = true;
    },
    //选择区域酒店列表审核状态
    chooseStatebyRegion(val) {
      this.$store.commit("HOTEL_TABLETYPE", val);
      this.chooseCityCopy(this.currentProvinceIdByRegions, val);
    },
    chooseHotelCopy(id) {
      if (this.checkStateByRegions == 10) {
        //未聚待审
        this.$http.get(
            `/resource/hotelMapping/list?cityId=${this.currentCityIdByRegions}&hotelName=${id}`
          )
          .then(rs => {
            this.$store.commit("HOTEL_CHECK_LIST", rs.data.body);
          });
      } else {
        this.$http.get(`/resource/hotelMapping/list?hotelId=${id}`).then(rs => {
          this.$store.commit("HOTEL_CHECK_LIST", rs.data.body);
        });
      }
    },
    //按城市名和id查询
    searchHotel() {
      if (this.searchInput == "") {
        this.$Notice.warning({
          title: "请输入查询内容",
          desc:'查询内容不能为空'
        });
        return;
      }
      this.isCheckStateByRegionsShow = false;
      if (this.searchID === "hotelId") {
        if (!/^[0-9]*$/.test(this.searchInput)) {
          this.$Notice.warning({
            title: "请输入正确的酒店id",
            desc: "请输入数字id"
          });
          return;
        }
        this.$http
          .get(`/resource/hotelMapping/navSearch?hotelId=${this.searchInput}`)
          .then(rs => {
            this.hotelListChooseByRegions = rs.data.body;
          })
          .then(rs => {
            this.btnType = "region";
            this.chooseByRegions = "hotel";
          });
      } else {
        if (
          !/^[\u4E00-\u9FA5]$/.test(this.searchInput) ||
          this.searchInput === "酒店"
        ) {
          this.$Notice.warning({
            title: "请输入正确的酒店名称",
            desc: '不能只输入"酒店"'
          });
          return;
        }
        this.$http
          .get(`/resource/hotelMapping/navSearch?hotelName=${this.searchInput}`)
          .then(rs => {
            this.hotelListChooseByRegions = rs.data.body;
          })
          .then(rs => {
            this.btnType = "region";
            this.chooseByRegions = "hotel";
          });
      }
    }
  }
};
</script>