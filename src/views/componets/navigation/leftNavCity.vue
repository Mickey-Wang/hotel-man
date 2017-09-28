<style lang="less" scoped>
.height100 {
  height: 100%;
}

section {
  height: 100%;
}

.ivu-row {
  padding-top: 5px;
}

.ivu-tabs-bar {
  margin-bottom: 0;
}

.ivu-tabs .ivu-tabs-tabpane {
  padding: 2px;
}
</style>
<style>
.ivu-tabs-bar {
  margin-bottom: 0;
}
</style>
<template>
  <section>
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
        <Button :type="btnTypesupplier" style="width:50%" @click="btnsupplier">按供应商审核</Button>
        <Button :type="btnTypeRegion" style="width:50%" @click="btnRegion">按区域审核</Button>
      </ButtonGroup>
    </Row>
    <Row style="height:80%">
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='supplier'" v-model="chooseBySuppliers">
        <TabPane label="供应商" name="suppliers">
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseSupplier">
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

        <TabPane label="国家" name="nation">
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseNation">
            <MenuItem name="1">
            <span>中国</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="省份" name="province">
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseProvince">
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
        <TabPane label="城市" style="height:100%" name="city">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseCity">
            <MenuItem name="1">
            <span>广州</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="2">
            <span>深圳</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
      </Tabs>
      <Tabs type="card" :animated="true" style="height:100%" v-show="btnType=='region'" v-model="chooseByRegions">
        <TabPane label="国家" name="nation">
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseNation">
            <MenuItem name="1">
            <span>中国</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
        <TabPane label="省份" name="province">
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseProvince">
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
        <TabPane label="城市" style="height:100%" name="city">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Row>
          <Menu theme="light" width="auto" :active-name="1" @on-select="chooseCity">
            <MenuItem name="1">
            <span>广州</span>
            <span>20000/10000/50000</span>
            </MenuItem>
            <MenuItem name="2">
            <span>深圳</span>
            <span>20000/10000/50000</span>
            </MenuItem>
          </Menu>
        </TabPane>
      </Tabs>
    </Row>
    <Row>
      <Page :total="50" size="small" show-total></Page>
    </Row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchID: 0,
      cityID: 0,
      searchInput: '',
      btnType: 'supplier',
      chooseBySuppliers:"",
      chooseByRegions:"",
      searchCondition: [{
        value: 0,
        label: '城市id'
      }, {
        value: 1,
        label: '城市名称'
      }],
      cityCondition: [{
        value: 0,
        label: '已聚待审'
      }, {
        value: 1,
        label: '已聚已审'
      }, {
        value: 2,
        label: '未聚未审'
      }]
    };
  },
  computed: {
    btnTypesupplier() {
      return this.btnType == 'supplier' ? 'primary' : 'ghost'
    },
    btnTypeRegion() {
      return this.btnType == 'region' ? 'primary' : 'ghost'
    }
  },
  methods: {
    btnsupplier() {
      this.btnType = 'supplier';
    },
    btnRegion() {
      this.btnType = 'region';
    },
    chooseSupplier(){
      this.chooseBySuppliers = "nation"
    },
    chooseNation(){
      this.chooseBySuppliers = "province"      
    },
    chooseProvince(){
      this.chooseBySuppliers = "city"
    },
    chooseCity(){

    }
  }
}
</script>


