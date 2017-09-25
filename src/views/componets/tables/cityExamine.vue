<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">城市审核列表</div>
            <div class="button">
                <Button type="primary">审核通过</Button>
                <Button type="primary">设为待审</Button>
                <Button type="primary">新增</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <div class="wrap wrapW1">
                    <div>
                        <table>
                            <tr>
                                <th><input type="checkbox" v-model="checkAll" @click="toggleCheckAll"></th>
                                <th v-for="(item,index) in cityHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table v-if="cityExamineData.length>0">
                            <tr v-for="(item,index) in cityExamineData" :class="{trClass: item.status=='未聚待审'}">
                                <td><input type="checkbox" v-model="item.checked" :disabled="item.status=='未聚待审'?disableStatus1:disableStatus2"></td>
                                <td @click="getInputValue(item)">{{item.name}}</td>
                                <td>{{item.id}}</td>
                                <td>{{item.province}}</td>
                                <td>{{item.country}}</td>
                                <td>{{item.supplier}}</td>
                                <td>{{item.status}}</td>
                                <td>{{item.operatorMan}}</td>
                                <td>{{item.operatorTime}}</td>
                                <td>{{item.operator}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="cityExamineData.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottomTable">
            <div class="title">相似城市列表</div>
            <div class="button">
                <span>城市名称</span>
                <Input v-model="cityValue" placeholder="JD数据模糊比配" style="width: 200px"></Input>
                <Button type="primary">Go</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <div class="wrap wrapW2">
                    <div>
                        <table>
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in similarHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table v-if="similarCityData.length>0">
                            <tr v-for="(item,index) in similarCityData">
                                <td><input type="radio" v-model="similar" :value="index"></td>
                                <td>{{item.name}}</td>
                                <td>{{item.id}}</td>
                                <td>{{item.province}}</td>
                                <td>{{item.country}}</td>
                                <td>{{item.supplier}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="similarCityData==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            // 单选
            similar:'',
            // 相似搜索框的关键字
            cityValue:'',
            // 未聚待审的背景色
            classShow:false,
            cityHeaderData:[
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
            cityExamineData:[
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
                    status:'未聚待审',
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
                    status:'未聚待审',
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
                }
            ],
            similarHeaderData:[
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
                }
            ],
            similarCityData:[
                {
                    name: '阿拉尔',
                    id: 'JD-H10',
                    province:'新疆',
                    country:'中国',
                    supplier:'京东国内酒店'
                },
                {
                    name: '阿拉尔市',
                    id: 'JD-H10',
                    province:'新疆',
                    country:'中国',
                    supplier:'京东国内酒店'
                },
                {
                    name: '阿拉善',
                    id: 'JD-H10',
                    province:'新疆',
                    country:'中国',
                    supplier:'京东国内酒店'
                },
//                {
//                    name: '阿尔拉',
//                    id: 'JD-H10',
//                    province:'新疆',
//                    country:'中国',
//                    supplier:'京东国内酒店'
//                }
            ],
            // 全选状态
            checkAll: false,
            // 点击全选时，只有未聚待审可以选中
            // 控制未聚待审的disable的状态
            disableStatus1:false,
            // 控制非未聚待审的disable的状态
            disableStatus2:false
        }
    },
    created(){
        // cityExamineData数据中set数据 checked: false
        this.cityExamineData.forEach((item,index)=>{
            this.$set(item,'checked',false);
        })
    },
    watch: {
        cityExamineData: {
            handler () {
                let check = true;
                for (let i = 0; i < this.cityExamineData.length; i++) {
                    let item = this.cityExamineData[i];
                    if (item.status === '未聚待审') {
                        console.log('item', item.checked);
                        if (!item.checked) {
                            check = false;
                            break;
                        }
                    }
                }
                this.checkAll = check;
                console.log('change checkAll', this.checkAll);
            },
            deep: true
        }
    },
    methods:{
        toggleCheckAll () {
            // 等model变化完再执行事件
            this.$nextTick(() => {
                for (let i = 0; i < this.cityExamineData.length; i++) {
                    let item = this.cityExamineData[i];
                    if (item.status === '未聚待审') {
                        item.checked = this.checkAll;
                    }else {
                        // 如果不是未聚待审，则不能进行选择操作
                        this.disableStatus2 = true;
                    }
                }
            })
        },
        // 点击城市名称赋值到input，然后调取接口
        getInputValue(item){
            console.log('点击获取名字:',item.name);
            this.cityValue = item.name;
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
/* 表格初始化 */
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
    height: 40px;
}
table th{
    background: #f8f8f9;
}
table tr td:nth-of-type(1),table tr th:nth-of-type(1){
    border-left: none;
}
.wrapW1 table tr td:nth-of-type(2){
    cursor: pointer;
}
/*table tr:hover{*/
    /*background: #ebf7ff;*/
/*}*/
/* 表格横向滚动条和纵向滚动条 */
.table{
    height: 60%;
    min-width: 100%;
    position: relative;
    border: 1px solid #dddee1;
    border-top: none;
    overflow-x: auto;
    .wrapW1{
        min-width: 130%;
    }
    .wrapW2{
        width: 100%;
    }
    .wrap{
        width: inherit;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        div:nth-of-type(1){
            overflow: hidden;
            table{
                table-layout: fixed;
            }
        }
        div:nth-of-type(2){
            height: 74%;
            overflow: auto;
            table{
                table-layout: fixed;
            }
        }
    }
}
.wrapW1 table tr:nth-of-type(1) td{
    color: #2d8cf0;
}

.trClass{
    background: #ebf7ff;
}
.noData{
    font-size: 26px;
    color: #9ea7b4;
}
/* 列表名称、button、表格相同样式 */
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
.tableWrap{
    width: 100%;
    height: 100%;
    padding: 10px;
    .topTable{
        margin-bottom: 20px;
        height: 50%;
        width: 100%;
    }
    .bottomTable{
        height: 50%;
        width: 100%;
    }
}
/*table tr td:nth-of-type(1){*/
    /*width: 100px;*/
/*}*/
/*table tr th:nth-of-type(1){*/
    /*width: 100px;*/
/*}*/
/*table tr td:nth-of-type(2){*/
    /*width: 150px;*/
/*}*/
/*table tr th:nth-of-type(2){*/
    /*width: 150px;*/
/*}*/
/*table tr td:nth-of-type(3){*/
    /*width: 100px;*/
/*}*/
/*table tr th:nth-of-type(3){*/
    /*width: 100px;*/
/*}*/
</style>