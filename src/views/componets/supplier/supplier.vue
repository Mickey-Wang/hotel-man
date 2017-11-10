<template>
    <section class="supplierWrap">
        <div class="conditions">
            <div class="conditions-top conditionsSame">
                <span>供应商接入方式</span>
                <Select v-model="selectAccessType" style="width:150px;margin-right:20px;" placeholder="全部">
                    <Option v-for="item in accessType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <span v-if="selectAccessType==1">平台名称</span>
                <Select v-if="selectAccessType==1" v-model="selectPlatform" style="width:150px;margin-right:20px;" placeholder="请选择">
                    <Option v-for="item in platformData" :value="item.value" :key="item.value"></Option>
                </Select>
                <span>供应商名称</span>
                <Input v-model="supplierName" style="width:150px;margin-right:20px;"></Input>
                <span>供应商ID</span>
                <Input v-model="supplierId" style="width:150px;"></Input>
            </div>
            <div class="conditions-bottom conditionsSame">
                <span>POP商家编号</span>
                <Input v-model="supplierNumber" style="width:150px;margin-right:20px;"></Input>
                <span>在线情况</span>
                <Select v-model="selectOnlineStatus" style="width:150px;margin-right:20px;" placeholder="全部">
                    <Option v-for="item in onlineStatus" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
                <span>上架渠道</span>
                <Select v-model="selectChannel" style="width:150px;" placeholder="全部">
                    <Option v-for="item in channel" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
                <Button type="primary" @click="toSearchList" style="margin-right: 10px; margin-left: 20px;">查询</Button>
                <Button type="warning">重置</Button>
            </div>
        </div>
        <div class="tableSection">
            <div class="button">
                <Button type="primary" @click="toAdd">新增</Button>
                <Button type="primary">导出</Button>
            </div>
            <div class="tableWrap">
                <div class="table">
                    <div ref="w1">
                        <table style="min-width: 1182px;" class="thWidth">
                            <tr>
                                <th><input v-model="checkAll" @click="toggleCheckAll" type="checkbox"/></th>
                                <th v-for="(item,index) in supplierHeader" :key="index">{{item.title}}</th>
                                <th>操作</th>
                                <th>附加设置</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table style="min-width: 1182px;" class="tdWidth">
                            <tr v-for="(item,index) in supplierList" :key="index">
                                <td><input type="checkbox" v-model="item.checked"/></td>
                                <td>{{item.supplierId}}</td>
                                <td v-if="item.name.length>8"><Tooltip :content="item.name" placement="right-start"><span class="wSpan">{{item.name}}</span></Tooltip></td>
                                <td v-else>{{item.name}}</td>
                                <td>{{item.accessType}}</td>
                                <td>{{item.popBusinessCode}}</td>
                                <td v-if="item.name.length>8"><Tooltip :content="item.popStoreName" placement="right-start"><span class="wSpan">{{item.popStoreName}}</span></Tooltip></td>
                                <td v-else>{{item.popStoreName}}</td>
                                <td>{{item.returnCommissionRatio}}</td>
                                <td>{{item.channels}}</td>
                                <td>{{item.payType}}</td>
                                <td>{{item.operator}}</td>
                                <td>{{item.lastOperateTime}}</td>
                                <td>{{item.status}}</td>
                                <td>
                                    <span @click="changeText(item)" v-if="item.controlText" :class="{onlineText:item.controlText}">上线</span>
                                    <span v-if="!item.controlText">下线</span>
                                    <span @click="goToCheck">查看</span>
                                    <span>编辑</span>
                                </td>
                                <td>
                                    <span @click="goToCustomerInfo">客户信息</span>
                                </td>
                            </tr>
                        </table>
                        <div class="noData" v-if="supplierList.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
            <div class="page">
                <div class="floatWrap">
                    <span>共210条</span>
                    <span>20条/页</span>
                    <Page :current="1" :page-size="20" :total="210" on-change="changePage()" style="float: right; margin-left:10px;"></Page>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            //供应商接入方式的数据
            selectAccessType:'',
            accessType:[
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 1,
                    label: '平台'
                },
                {
                    value: 2,
                    label: 'API平台'
                },
                {
                    value: 3,
                    label: 'Ebooking'
                }
            ],
            // 供应商名称
            supplierName:'',
            // 平台选择
            selectPlatform:'',
            platformData:[
                {
                    value: '泰坦云',
                    label: '泰坦云'
                },
                {
                    value: '畅联',
                    label: '畅联'
                },
            ],
            // 供应商Id
            supplierId:'',
            // 商家编号
            supplierNumber:'',
            // 在线情况
            onlineStatus:[
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 1,
                    label: '已上线'
                },
                {
                    value: 2,
                    label: '已下线'
                }
            ],
            selectOnlineStatus:'',
            // 商家渠道channel
            channel:[
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 1,
                    label: '网站前台'
                },
                {
                    value: 2,
                    label: '酒店APP'
                },
                {
                    value: 3,
                    label: '网站差旅'
                },
                {
                    value: 4,
                    label: '薪福卡(大客户)'
                },
                {
                    value: 5,
                    label: '齐采网(大客户)'
                },
                {
                    value: 6,
                    label: '大连航空'
                }
            ],
            selectChannel:'',
            // 供应商列表
            supplierHeader:[
                {
                    title: '供应商ID',
                    key: 'supplierId'
                },
                {
                    title: '供应商名称',
                    key: 'name'
                },
                {
                    title: '供应商接入方式',
                    key: 'accessType'
                },
                {
                    title: 'pop商家编号',
                    key: 'popBusinessCode'
                },
                {
                    title: 'pop店铺名称',
                    key: 'popStoreName'
                },
                {
                    title: '佣金',
                    key: 'returnCommissionRatio'
                },
                {
                    title: '上架渠道',
                    key: 'channels'
                },
                {
                    title: '支付方式',
                    key: 'payType'
                },
                {
                    title: '操作员',
                    key: 'operator'
                },
                {
                    title: '最后更新时间',
                    key: 'lastOperateTime'
                },
                {
                    title: '在线情况',
                    key: 'status'
                }
            ],
            supplierList:[
                {
                    supplierId:'3487854',
                    name:'艺龙网现付艺龙网支付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网艺龙旅行网艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487855',
                    name:'艺龙网现付艺龙网',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487856',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487857',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487858',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487859',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487860',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487861',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487862',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487863',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487864',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487865',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487865',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487865',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                },
                {
                    supplierId:'3487865',
                    name:'艺龙网现付',
                    accessType:'API直连',
                    popBusinessCode:'613411111',
                    popStoreName:'艺龙旅行网',
                    returnCommissionRatio:'5%',
                    channels:'全部',
                    payType:'现付',
                    operator:'系统',
                    lastOperateTime:'2017-01-01 16:59:02',
                    status:'已上线'
                }
            ],
            // 全选状态
            checkAll: false,
            // 供应商列表数据
            supplierData:{}
        }
    },
    created(){
        this.supplierList.forEach((item,index)=>{
            this.$set(item,'checked',false);// 控制全选
            this.$set(item,'controlText',true); // 控制上线和下线文字
        });
        // 调取供应商列表接口

    },
    watch:{
        supplierList:{
            handler(){
                let check = true;
                for(let i=0; i<this.supplierList.length; i++){
                    let item = this.supplierList[i];
                    if(!item.checked){
                        check = false;
                        break;
                    }
                }
                this.checkAll = check;
            },
            deep:true
        }
    },
    methods:{
        // 点击上线的事件
        changeText(item){
            item.controlText = false;
        },
        // 点击全选
        toggleCheckAll(){
            this.$nextTick(()=>{
                for(let i=0; i<this.supplierList.length; i++){
                    let item = this.supplierList[i];
                    item.checked = this.checkAll;
                }
            })
        },
        // 新增按钮
        toAdd(){
            this.$router.push({
                name:'step1'
            });
        },
        // 客户信息按钮
        goToCustomerInfo(){
            this.$router.push({
                name:'customerInfo'
            });
        },
        //去查看
        goToCheck(){
            this.$router.push({
                name:'check'
            });
        },
        // 点击查询按钮获取列表
        toSearchList(){
            console.log('供应商接入方式:', this.selectAccessType);
            console.log('平台名称:',this.selectPlatform);
            console.log('供应商名称:',this.supplierName);
            console.log('供应商ID:',this.supplierId);
            console.log('商家编号:',this.supplierNumber);
            console.log('在线情况:',this.selectOnlineStatus);
            console.log('上架渠道:',this.selectChannel);
            this.supplierData = {
                selectAccessType:this.selectAccessType,
                selectPlatform:this.selectPlatform,
                supplierName:this.supplierName,
                supplierId:this.supplierId,
                supplierNumber:this.supplierNumber,
                selectOnlineStatus:this.selectOnlineStatus,
                selectChannel:this.selectChannel
            };
        },
        // 点击切换获取当前页数
        changePage(current){
            console.log('当前页数:',current);
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
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
    width: 40px;
}
table tr td:nth-of-type(7),table tr th:nth-of-type(7){
    width: 60px;
}
table tr td:nth-last-of-type(2){
    cursor: pointer;
    span{
        color: #2b85e4;
    }
}
table tr td:nth-last-of-type(1){
    cursor: pointer;
}
.supplierWrap{
    width: 100%;
    height: 100%;
    .conditions{
        margin-bottom: 30px;
        .conditionsSame{
            span{
                display: inline-block;
                width: 70px;
            }
            span:nth-of-type(1){
                width: 86px;
            }
        }
        .conditions-top{
            margin-bottom: 20px;
        }
    }
    .tableSection{
        width: 100%;
        height: 66%;
        .button{
            margin-bottom: 10px;
        }
        .tableWrap{
            min-width: 100%;
            height: 100%;
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
                    .thWidth{
                        tr{
                            th:nth-of-type(3),th:nth-of-type(6){
                                width: 100px;
                            }
                        }
                    }
                }
                div:nth-of-type(2){
                    height: 91%;
                    overflow: auto;
                    overflow-x: hidden;
                    table{
                        table-layout: fixed;
                        tr:nth-of-type(1) td{
                            border-top: none;
                        }
                    }
                    .tdWidth{
                        tr{
                            td:nth-of-type(3),td:nth-of-type(6){
                                width: 100px;
                                .wSpan{
                                    width: 100px;
                                    display: inline-block;
                                    margin-top: 8px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }
                        }
                    }
                }
            }
        }
        .page{
            margin-top: 15px;
            height: 32px;
            line-height: 32px;
            .floatWrap{
                float: right;
            }
        }
    }
    .onlineText{
        color: #ed3f14;
    }
}
</style>