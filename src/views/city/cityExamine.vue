<template>
    <section class="wrap">
        <div class="top" ref="top">
            <div class="title">城市审核列表</div>
            <div class="button">
                <Button type="primary">审核通过</Button>
                <Button type="primary">设为待审</Button>
                <Button type="primary">新增</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <Table :row-class-name="rowClassName" :height="topHeight" border :columns="cityColumns" :data="cityData"></Table>
            </div>
        </div>
        <div class="bottom" ref="top">
            <div class="title">城市审核列表</div>
            <div class="button">
                <span>城市名称</span>
                <Input v-model="cityValue" placeholder="JD数据模糊比配" style="width: 200px"></Input>
                <Button type="primary">Go</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <Table :height="topHeight" border :columns="similarColumns" :data="similarData"></Table>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data () {
            return {
                cityColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '城市名称',
                        key: 'name'
                    },
                    {
                        title: '城市ID',
                        key: 'id'
                    },
                    {
                        title: '省份',
                        key: 'province'
                    },
                    {
                        title: '国家',
                        key: 'country'
                    },
                    {
                        title: '供应商名称',
                        key: 'supplier'
                    },
                    {
                        title: '聚合状态',
                        key: 'status'
                    },
                    {
                        title: '操作人',
                        key: 'operatorMan'
                    },
                    {
                        title: '操作时间',
                        key: 'operatorTime'
                    },
                    {
                        title: '操作',
                        key: 'operator'
                    }
                ],
                cityData: [
                    {
                        name: '阿尔拉',
                        id: 'JD-H10',
                        province:'新疆',
                        country:'中国',
                        supplier:'京东国内酒店',
                        status:'',
                        operatorMan:'',
                        operatorTime:'',
                        operator:''
                    },
                    {
                        name: '阿尔拉市',
                        id: 'A00067',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商A',
                        status:'已聚待审',
                        operatorMan:'system',
                        operatorTime:'2017/08/11 17:19',
                        operator:'查看'
                    },
                    {
                        name: '阿尔拉',
                        id: 'BUH13',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商B',
                        status:'已聚待审',
                        operatorMan:'system',
                        operatorTime:'2017/08/12 18:00',
                        operator:'查看'
                    },
                    {
                        name: '阿尔拉',
                        id: 'CN567',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商C',
                        status:'已聚已审',
                        operatorMan:'system',
                        operatorTime:'2017/08/13 19:00',
                        operator:'查看'
                    },
                    {
                        name: '阿尔拉',
                        id: 'DTY44',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商D',
                        status:'已聚已审',
                        operatorMan:'system',
                        operatorTime:'2017/08/16 19:00',
                        operator:'查看'
                    },
                ],
                similarColumns: [
                    {
                        render: (h, params) => {
                            return h('div', [
                                h('Radio', {
                                    props: {
                                        type: 'label='+params.key,
                                    },

                                })
                            ]);
                        },
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '城市名称',
                        key: 'name'
                    },
                    {
                        title: '城市ID',
                        key: 'id'
                    },
                    {
                        title: '省份',
                        key: 'province'
                    },
                    {
                        title: '国家',
                        key: 'country'
                    },
                    {
                        title: '供应商名称',
                        key: 'supplier'
                    },
                    {
                        title: '聚合状态',
                        key: 'status'
                    },
                    {
                        title: '操作人',
                        key: 'operatorMan'
                    },
                    {
                        title: '操作时间',
                        key: 'operatorTime'
                    },
                    {
                        title: '操作',
                        key: 'operator'
                    }
                ],
                similarData: [
                    {
                        name: '阿尔拉',
                        id: 'JD-H10',
                        province:'新疆',
                        country:'中国',
                        supplier:'京东国内酒店',
                        status:'',
                        operatorMan:'',
                        operatorTime:'',
                        operator:''
                    },
                    {
                        name: '阿尔拉市',
                        id: 'A00067',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商A',
                        status:'已聚待审',
                        operatorMan:'system',
                        operatorTime:'2017/08/11 17:19',
                        operator:'查看'
                    },
                    {
                        name: '阿尔拉',
                        id: 'BUH13',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商B',
                        status:'已聚待审',
                        operatorMan:'system',
                        operatorTime:'2017/08/12 18:00',
                        operator:'查看'
                    },
                    {
                        name: '阿尔拉',
                        id: 'CN567',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商C',
                        status:'已聚已审',
                        operatorMan:'system',
                        operatorTime:'2017/08/13 19:00',
                        operator:'查看'
                    },
                    {
                        name: '阿尔拉',
                        id: 'DTY44',
                        province:'新疆',
                        country:'中国',
                        supplier:'酒店供应商D',
                        status:'已聚已审',
                        operatorMan:'system',
                        operatorTime:'2017/08/16 19:00',
                        operator:'查看'
                    },
                ],
                topHeight:'',
                cityValue: ''
            }
        },
        created(){

        },
        mounted(){
            let h = this.$refs.top.clientHeight;
            this.topHeight = h*2/3;
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
.ivu-table .demo-table-info-row td{
    background: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-error-row td{
    background: #ff6600;
    color: #fff;
}
.title{
    font-size: 16px;
    margin-bottom: 10px;
}
.button{
    margin-bottom: 10px;
}
.total{
    text-align: right;
}
.wrap{
    width: 100%;
    border: 1px solid #dddee1;
    padding: 10px;
    .top{
        height: 50%;
        width: 100%;
        margin: 0 auto 20px;
        overflow: auto;
    }
    .bottom{
        .button{
            span{
                font-size: 13px;
            }
        }
    }
}
</style>