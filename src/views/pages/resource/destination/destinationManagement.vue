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
.main {
  margin-top: 10px;
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
			<Row className="main"><!-- type="flex" justify="center" align="middle" -->
        <Col span="5">
          <Table stripe border :columns="columnsProvince" :data="provinceList"></Table>
        </Col>
        <Col span="10" v-if="tableCityShow">
          <Table stripe border :columns="columnsCity" :data="cityList"></Table>
        </Col>
        <Col span="9" v-if="tableAreaShow">
          <Table stripe border :columns="columnsArea" :data="areaList"></Table>
        </Col>
			</Row>		
		</Row>
	</div>
</template>
<script>
export default {
  data() {
    return {
      //搜索字段
      province: "",
      city: "",
      //表格显示区
      tableAreaShow:false,
      tableCityShow:false,
      //表格定义
      columnsProvince: [
        {
            title: '省份id',
            key: 'provinceId',
            "sortable": true,
            align:"center"
        },
        {
            title: '省份名称',
            key: 'provinceName',
            align:"center"          
        },
        {
            title: ' ',
            key: 'provinceNext',
            align:"center",
            render: (h, params) => {
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      style: {
                          marginRight: '0px'
                      },
                      on: {
                          click: () => {
                            let provinceId = params.row.provinceId;
                            console.log(this.city);
                            this.tableCityShow = !this.tableCityShow;
                            this.tableAreaShow = false;
                          }
                      }
                  }, '展开')
              ]);
          }          
        }
      ],
      columnsCity: [
        {
            title: '城市id',
            key: 'cityId',
            align:"center"            
        },
        {
            title: '城市名称',
            key: 'cityName',
            align:"center"
        },
        {
            title: '操作',
            key: 'cityOpr',
            align:"center",
            "width": 110,
            render: (h, params) => {
                return h('div', [
                    h('Select', {
                        props: {
                            placeholder:'请选择',
                            value: params.row.cityOpr
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
                          value:1,
                          label:'上线'
                        }
                      })
                    ]),
                ]);
            }
        },
        {
            title: '日志',
            key: 'cityLog',
            align:"center"
        },
        {
            title: '',
            key: 'cityNext',
            align:"center",
            render: (h, params) => {
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      style: {
                          marginRight: '2px'
                      },
                      on: {
                          click: () => {
                            let cityId = params.row.cityId;
                            console.log(this.city);
                            this.tableAreaShow = !this.tableAreaShow
                          }
                      }
                  }, '展开')
              ]);
          }
        }
      ],
      columnsArea: [
        {
            title: '行政区id',
            key: 'areaId',
            align:"center"
        },
        {
            title: '行政区名称',
            key: 'areaName',
            align:"center"
        },
        {
            title: '操作',
            key: 'areaOpr',
            width:110,
            align:"center",
            render: (h, params) => {
              return h('div', [
                  h('Select', {
                      props: {
                          placeholder:'请选择'
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
                        value:1,
                        label:'上线'
                      }
                    })
                  ]),
              ]);
            }
        },
        {
            title: '日志',
            key: 'areaLog',
            align:"center"
        }
      ],
      //表格数据
      provinceList: [
        {
           provinceId:'10001',
           provinceName:'北京',
           provinceNext:['展开','保存/收起']
        },{
           provinceId:'10002',
           provinceName:'北京',
           provinceNext:'展开'
        },{
           provinceId:'10003',
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
           cityOpr:1,
           cityNext:'展开'
        },{
           cityId:'100013',
           cityName:'北京',
           cityOpr:1,
           cityLog:'日志',
           cityNext:'展开'
        },{
           cityId:'100012',
           cityName:'北京',
           cityOpr:'',
           cityLog:'日志',
           cityNext:'展开'
        },
      ],
      areaList: [
        {
           areaId:'1000110',
           areaName:'西城区',
           areaLog:'日志'
        },{
           areaId:'1000112',
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