<template>
    <section class="wrap">
        <div class="roomTitle">
            <span>酒店ID：364469</span>
            <span>酒店名称：北京五棵松和颐酒店</span>
        </div>
        <div class="button">
            <Button type="primary">提交</Button>
            <Button type="primary">设为待审</Button>
            <Button type="primary">新增物理房型</Button>
            <Button type="primary">修改物理房型信息</Button>
            <Button type="primary">展开</Button>
            <Button type="primary">收起</Button>
            <Button type="primary">提交</Button>
        </div>
        <div class="tableWrap">
            <div class="table">
                <div ref="w1">
                    <table :style="{'min-width':divWidth1+'px'}">
                        <thead>
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in roomHeaderData">{{item.title}}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div>
                    <table id="mainTable" :style="{'min-width':divWidth1+'px'}">
                        <tbody>
                            <tr v-for="(item,index) in roomExamineData1" :class="{handle:index>0}">
                                <td><input type="checkbox"/></td>
                                <td>{{item.name}}</td>
                                <td>{{item.type}}</td>
                                <td>{{item.area}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.supplier}}</td>
                                <td>{{item.status}}</td>
                                <td>{{item.operatorMan}}</td>
                                <td>{{item.operatorTime}}</td>
                                <td>{{item.log}}</td>
                            </tr>
                            <tr v-for="(item,index) in roomExamineData2" :class="{handle:index>0}">
                                <td><input type="checkbox"/></td>
                                <td>{{item.name}}</td>
                                <td>{{item.type}}</td>
                                <td>{{item.area}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.supplier}}</td>
                                <td>{{item.status}}</td>
                                <td>{{item.operatorMan}}</td>
                                <td>{{item.operatorTime}}</td>
                                <td>{{item.log}}</td>
                            </tr>
                            <tr v-for="(item,index) in roomExamineData3" :class="{handle:index>0}">
                                <td><input type="checkbox"/></td>
                                <td>{{item.name}}</td>
                                <td>{{item.type}}</td>
                                <td>{{item.area}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.supplier}}</td>
                                <td>{{item.status}}</td>
                                <td>{{item.operatorMan}}</td>
                                <td>{{item.operatorTime}}</td>
                                <td>{{item.log}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import tableDragger from 'table-dragger'
    export default {
        data(){
            return{
                // div的宽度
                divWidth1:'',
                roomHeaderData:[
                    {
                        title: '房型名称',
                        key: 'name'
                    },
                    {
                        title: '床型',
                        key: 'type'
                    },
                    {
                        title: '面积',
                        key: 'area'
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title: '供应商',
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
                        title: '更新时间',
                        key: 'operatorTime'
                    },
                    {
                        title: '日志',
                        key: 'log'
                    }
                ],
                roomExamineData1:[
                    {
                        name: '商务客房(2)',
                        type: '大床',
                        area: '40㎡',
                        price: '',
                        supplier: 'JD',
                        status: '',
                        operatorMan: '',
                        operatorTime: '',
                        log: ''
                    },
                    {
                        name: '商务房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '商务房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚已审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '商务房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚已审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                ],
                roomExamineData2:[
                    {
                        name: '高级客房(2)',
                        type: '大床',
                        area: '40㎡',
                        price: '',
                        supplier: 'JD',
                        status: '',
                        operatorMan: '',
                        operatorTime: '',
                        log: ''
                    },
                    {
                        name: '高级房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '高级房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '高级房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '高级房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚已审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '高级房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚已审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '高级房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '已聚已审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                ],
                roomExamineData3:[
                    {
                        name: '行政套房(3)',
                        type: '大床',
                        area: '40㎡',
                        price: '',
                        supplier: 'JD',
                        status: '',
                        operatorMan: '',
                        operatorTime: '',
                        log: ''
                    },
                    {
                        name: '行政套房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '未聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '行政套房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '未聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                    {
                        name: '行政套房',
                        type: '大床',
                        area: '40㎡',
                        price: '500',
                        supplier: '携程',
                        status: '未聚待审',
                        operatorMan: '系统',
                        operatorTime: '2017-08-13 10:15:10',
                        log: '查看'
                    },
                ],
            }
        },
        mounted(){
            this.divWidth1 = this.$refs.w1.offsetWidth;
            this.$nextTick(vm=>{
                var el = document.getElementById('mainTable');
                var dragger = tableDragger(el, {
                    mode: 'row',
                    dragHandler: '.handle',
                    onlyBody: true,
                    animation: 300
                });
                dragger.on('drop',function(from, to){
                    console(from);
                    console(to);
                });
            })
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
/*表格初始化*/
table{
    width:100%;
    text-align:center;
    border-collapse:collapse;
    border-spacing:0;
    border-bottom:1px solid #e9eaec;
}
table td, table th{
    border-left:1px solid #e9eaec;
    border-top:1px solid #e9eaec;
    height: 34px;
}
table tr td:nth-of-type(1),table tr th:nth-of-type(1){
    border-left: none;
    width: 60px;
}
.wrap{
    width: 100%;
    height: 100%;
    padding: 10px;
    .roomTitle{
        span{
            display: inline-block;
            font-size: 13px;
            height: 30px;
            line-height: 30px;
        }
    }
    .button{
        margin-bottom: 10px;
    }
    .tableWrap{
        min-width: 100%;
        height: 86%;
        position: relative;
        border: 1px solid #dddee1;
        border-top: none;
        overflow-x: auto;
        .table{
            width: inherit;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            div:nth-of-type(1){
                overflow: hidden;
                box-sizing: border-box;
                table{
                    table-layout: fixed;
                    th{
                        background: #f8f8f9;
                    }
                }
            }
            div:nth-of-type(2){
                height: 93%;
                overflow: auto;
                table{
                    table-layout: fixed;
                    tr:nth-of-type(1) td{
                        border-top: none;
                    }
                }
            }
        }
    }
}
</style>