<style lang="less" scoped>
.layout-row {
  height: 100%;
}
@height: 100%;
.layout-content-main {
  padding: 10px;
  height: @height;
  .layout-content-main-base {
    height: @height;
    border: 1px dashed #ddd;
    padding: 2px;
  }
  .layout-content-main-left {
    .layout-content-main-base;
  }
  .layout-content-main-right {
    .layout-content-main-base;
  }
}
</style>
<template>
	<div class="layout-row">
		<Row class="layout-row">
			<Row type="flex" justify="center" align="middle">
				<Row type="flex" justify="center" align="middle" :gutter="2"  style="width:60%">
					<Col span="2">
						<Row type="flex" justify="center" align="middle">省份：</Row>
					</Col> 
					<Col span="8">
						<Input v-model="province" placeholder="请输入省份"></Input>
					</Col> 
					<Col span="2"><Row type="flex" justify="center" align="middle">城市：</Row></Col>
					<Col span="8">
						<Input v-model="city" placeholder="请输入城市"></Input>
					</Col> 
					<Col span="4">
						<Button type="primary" icon="ios-search" long>搜索</Button>
					</Col> 
				</Row>
			</Row>
			<Row>
        <Col span="6">
          <Table stripe border :columns="columns1" :data="provinceList"></Table>
        </Col>
        <Col span="9">
          <Table stripe border :columns="columns2" :data="cityList"></Table>
        </Col>
        <Col span="9">
          <Table stripe border :columns="columns3" :data="areaList"></Table>
        </Col>
			</Row>		
		</Row>
	</div>
</template>
<script>
export default {
  data() {
    return {
      province: "",
      city: "",
      columns1: [
        {
            title: '省份id',
            key: 'provinceId'
        },
        {
            title: '省份名称',
            key: 'provinceName'
        },
        {
            title: '',
            key: 'provinceNext'
        }
      ],
      columns2: [
        {
            title: '城市id',
            key: 'cityId'
        },
        {
            title: '城市名称',
            key: 'cityName'
        },
        {
            title: '操作',
            key: 'cityOpr',
            render: (h, params) => {
                return h('div', [
                    h('Select', {
                        props: {
                            placeholder:'123'
                        }
                    },[
                      h('Option',{
                        props:{
                          value:0,
                          label:'下线'
                        }
                      }),
                      h('Option',{
                        props:{
                          value:0,
                          label:'上线'
                        }
                      })
                    ]),
                ]);
            }
        },
        {
            title: '日志',
            key: 'cityLog'
        },
        {
            title: '',
            key: 'cityNext'
        }
      ],
      columns3: [
        {
            title: '行政区id',
            key: 'areaId'
        },
        {
            title: '行政区名称',
            key: 'areaName'
        },
        {
            title: '操作',
            key: 'areaOpr'
        },
        {
            title: '日志',
            key: 'areaLog'
        }
      ],
      provinceList: [
        {
           provinceId:'10001',
           provinceName:'北京',
           provinceNext:'展开'
        },{
           provinceId:'10001',
           provinceName:'北京',
           provinceNext:'展开'
        },{
           provinceId:'10001',
           provinceName:'北京',
           provinceNext:'展开'
        },
      ],
      cityList: [
        {
           cityId:'100011',
           cityName:'北京',
           cityOpr:'fefefe',
           cityLog:'日志',
           cityNext:'展开'
        },{
           cityId:'100011',
           cityName:'北京',
           cityOpr:'',
           cityLog:'日志',
           cityNext:'展开'
        },{
           cityId:'100011',
           cityName:'北京',
           cityOpr:'',
           cityLog:'日志',
           cityNext:'展开'
        },
      ],
      areaList: [
        {
           areaId:'1000113',
           areaName:'西城区',
           areaLog:'日志'
        },{
           areaId:'1000113',
           areaName:'西城区',
           areaLog:'日志'
        },{
           areaId:'1000113',
           areaName:'西城区',
           areaLog:'日志'
        },
      ]
    };
  },
  components: {}
};
</script>