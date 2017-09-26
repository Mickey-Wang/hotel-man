<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">酒店审核列表</div>
            <div class="button">
                <Button type="primary">审核通过</Button>
                <Button type="primary">设为待审</Button>
                <Button type="primary">新增</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <div class="wrap wrapW1">
                    <div :style="{'padding-right':paddingR1+'px'}">
                        <table>
                            <tr>
                                <th><input type="checkbox" v-model="checkAll" @click="toggleCheckAll"></th>
                                <th v-for="(item,index) in cityHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="h1">
                        <table ref="h2" v-if="cityExamineData.length>0">
                            <tr v-for="(item,index) in cityExamineData" :class="{trClass: item.status=='未聚待审'}">
                                <td><input type="checkbox" v-model="item.checked" :disabled="item.status=='未聚待审'?disableStatus1:disableStatus2"></td>
                                <td @click="getInputValue(item)">{{item.name}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.phone}}</td>
                                <td>{{item.range}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.city}}</td>
                                <td>{{item.supplier}}</td>
                                <td>{{item.cityId}}</td>
                                <td>{{item.status}}</td>
                                <td>{{item.operatorMan}}</td>
                                <td>{{item.operatorTime}}</td>
                                <td>{{item.log}}</td>
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
            <div class="title">相似酒店列表</div>
            <div class="button">
                <span>酒店名称</span>
                <Input v-model="cityValue" placeholder="JD数据模糊比配" style="width: 200px"></Input>
                <Button type="primary">Go</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <div class="wrap wrapW2">
                    <div :style="{'padding-right':paddingR2+'px'}">
                        <table>
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in similarHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="h3">
                        <table ref="h4" v-if="similarCityData.length>0">
                            <tr v-for="(item,index) in similarCityData">
                                <td><input type="radio" v-model="similar" :value="index"></td>
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.phone}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.city}}</td>
                                <td>{{item.tree}}</td>
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
            // 判断是否加padding
            paddingR1:0,
            paddingR2:0,
            cityHeaderData:[
                {
                    title: '酒店名称',
                    key: 'name'
                },
                {
                    title: '酒店地址',
                    key: 'address'
                },
                {
                    title: '酒店电话',
                    key: 'phone'
                },
                {
                    title: '经纬度距离',
                    key: 'range'
                },
                {
                    title: '酒店链接',
                    key: 'link'
                },
                {
                    title: '城市',
                    key: 'city'
                },
                {
                    title: '供应商',
                    key: 'supplier'
                },
                {
                    title: '供应商酒店ID',
                    key: 'cityId'
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
            cityExamineData:[
                {
                    name: '北京五棵松和颐酒店',
                    address: '北京海淀区永定路4号院',
                    phone:'010-88257117',
                    range:'',
                    link:'打开链接',
                    city:'北京',
                    supplier:'JD',
                    cityId:'001',
                    status:'',
                    operatorMan:'系统',
                    operatorTime:'',
                    log:''
                },
                {
                    name: '北京五棵松和颐酒店',
                    address: '北京海淀区永定路4号院',
                    phone:'010-88257117',
                    range:'50m',
                    link:'打开链接',
                    city:'北京',
                    supplier:'携程',
                    cityId:'001',
                    status:'未聚待审',
                    operatorMan:'系统',
                    operatorTime:'2017-8-10 10:15:11',
                    log:'查看'
                },
                {
                    name: '北京五棵松和颐酒店',
                    address: '北京海淀区永定路4号院',
                    phone:'010-88257117',
                    range:'30m',
                    link:'打开链接',
                    city:'北京',
                    supplier:'携程',
                    cityId:'001',
                    status:'未聚待审',
                    operatorMan:'系统',
                    operatorTime:'2017-8-10 10:15:11',
                    log:'查看'
                }
            ],
            similarHeaderData:[
                {
                    title: '城市ID',
                    key: 'id'
                },
                {
                    title: '酒店名称',
                    key: 'name'
                },
                {
                    title: '酒店地址',
                    key: 'address'
                },
                {
                    title: '酒店电话',
                    key: 'phone'
                },
                {
                    title: '酒店链接',
                    key: 'link'
                },
                {
                    title: '城市',
                    key: 'city'
                },
                {
                    title: '查看酒店Tree',
                    key: 'tree'
                },
            ],
            similarCityData:[
                {
                    id: '364469',
                    name: '北京燕莎和颐酒店',
                    address:'北京市朝阳区新源西里东街6号楼',
                    phone:'010-64666626',
                    link:'打开链接',
                    city:'北京',
                    tree:'Tree信息'
                },
                {
                    id: '364469',
                    name: '北京燕莎和颐酒店',
                    address:'北京市朝阳区新源西里东街6号楼',
                    phone:'010-64666626',
                    link:'打开链接',
                    city:'北京',
                    tree:'Tree信息'
                },
                {
                    id: '364469',
                    name: '北京燕莎和颐酒店',
                    address:'北京市朝阳区新源西里东街6号楼',
                    phone:'010-64666626',
                    link:'打开链接',
                    city:'北京',
                    tree:'Tree信息'
                },
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
    filters:{
        highlight: function (value, word) {
            return highlight(value, word)
        }
    },
    mounted(){
        // 如果有滚动条，要去掉滚动条的宽度
        let h1 = this.$refs.h1.offsetHeight;
        let h2 = this.$refs.h2.offsetHeight;
        let h3 = this.$refs.h3.offsetHeight;
        let h4 = this.$refs.h4.offsetHeight;
        this.paddingR1 = this.getPadding(h1,h2);
        this.paddingR2 = this.getPadding(h3,h4);
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
        },
        // 判断padding为多少
        getPadding(h1,h2){
            if(h1>=h2){
                return 0;
            }else {
                return 17;
            }
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
    /*background: #f8f8f9;*/
}
table tr td:nth-of-type(1),table tr th:nth-of-type(1){
    border-left: none;
    width: 60px;
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
        min-width: 200%;
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
            background: #f8f8f9;
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
</style>