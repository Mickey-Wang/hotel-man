<template>
  <section>
      <layout>
          <div slot="main-left" class="height100">
            <Row class="search-top">
                <Col span="6">
                    <Select v-model="model2" class="search-top-left">
                        <Option v-for="item in serachCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="14">
                    <Input v-model="value2" placeholder="请输入ID或名称" class="search-top-right"></Input>
                </Col>
                <Col span="4">
                    <Button type="primary" shape="circle" icon="ios-search"></Button>
                </Col>
            </Row>
            <Row>
                <ButtonGroup size="large" style="width:100%">
                    <Button type="primary">按供应商审核</Button>
                    <Button>按区域审核</Button>
                </ButtonGroup>
                <!-- <Col span="12">
                    <Button type="primary"></Button>
                </Col>
                <Col span="12">
                    <Button type="ghost"></Button>
                </Col> -->
            </Row>
            <Row style="height:100%">
                <Tabs type="card" style="height:100%">
                    <TabPane label="供应商">
                        <p>携程</p>
                        <p>艺龙</p>
                        <p>去哪儿</p>
                    </TabPane>
                    <TabPane label="国家">标签二的内容</TabPane>
                    <TabPane label="省份">标签三的内容</TabPane>
                    <TabPane label="城市">标签三的内容</TabPane>
                    <TabPane label="酒店" style="height:100%">
                        <Row  class="check-select">
                            <Select v-model="model2">
                                <Option v-for="item in hotelCondition" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>

                        </Row>
                    </TabPane>
                </Tabs>
            </Row>
          </div>
          <div slot="main-right">
              12344
          </div>
      </layout>
  </section>
</template>
<style lang="less" scoped>
    .height100{
        height: 100%;
    }
    section{
        height: 100%;
    }
    .check-select{
        // position: relative;
        z-index: 10;
    }
</style>
<script>
import layout from '../componets/layout.vue'
export default {
    data(){
        return{
            serachCondition:[{
                value:0,
                label:'酒店id'
            },{
                value:1,
                label:'酒店名称'
            }],
            hotelCondition:[{
                value:0,
                label:'已聚待审'
            },{
                value:1,
                label:'已聚已审'
            },{
                value:2,
                label:'未聚未审'
            }]
        };
    },
    components:{
        layout,
    },
}
</script>




