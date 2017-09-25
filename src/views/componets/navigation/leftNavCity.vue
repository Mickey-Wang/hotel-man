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
        <Button type="primary" style="width:50%">按供应商审核</Button>
        <Button style="width:50%">按区域审核</Button>
      </ButtonGroup>
    </Row>
    <Row style="height:80%">
      <Tabs type="card" style="height:100%">
        <TabPane label="供应商">
          <p>携程</p>
          <p>艺龙</p>
          <p>去哪儿</p>
        </TabPane>
        <TabPane label="国家">标签二的内容</TabPane>
        <TabPane label="省份">标签三的内容</TabPane>
        <TabPane label="城市" style="height:100%">
          <Row class="check-select">
            <Select v-model="cityID">
              <Option v-for="item in cityCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>

          </Row>
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
}
</script>


