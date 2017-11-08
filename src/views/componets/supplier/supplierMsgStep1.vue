<template>
    <section class="supplierWrap">
        <div class="supplierStep">
            <Steps :current="current">
                <Step title="步骤1" content="基本信息"></Step>
                <Step title="步骤2" content="结算及佣金配置"></Step>
                <Step title="完成"></Step>
            </Steps>
        </div>
        <div class="stepOne" v-if="current==0">
            <div class="content">
                <div class="main">
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>供应商名称</span>
                        </div>
                        <div class="right">
                            <Input v-model="supplierName" placeholder="请输入..." style="width: 260px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>供应商接入方式</span>
                        </div>
                        <div class="right">
                            <Select v-model="selectAccessType" style="width:260px;margin-right:20px;" placeholder="请选择">
                                <Option v-for="item in AccessType" :value="item.value" :key="item.value"></Option>
                            </Select>
                            <span><em>*</em>供应商名称</span>
                            <Select :disabled="selectAccessType!='平台'" v-model="selectPlatformName" style="width:260px;margin-right:20px;" placeholder="请选择">
                                <Option v-for="item in platformName" :value="item.value" :key="item.value"></Option>
                            </Select>
                            <span>平台供应商识别码</span>
                            <Input :disabled="selectAccessType!='平台'" v-model="platformCode" placeholder="请输入..." style="width: 260px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>报价币种</span>
                        </div>
                        <div class="right">
                            <Select v-model="selectQuotedCurrency" style="width:260px;margin-right:20px;" placeholder="CNY人民币">
                                <Option v-for="item in quotedCurrency" :value="item.value" :key="item.value"></Option>
                            </Select>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>结算币种</span>
                        </div>
                        <div class="right">
                            <Select v-model="selectSettlementCurrency" style="width:260px;margin-right:20px;" placeholder="CNY人民币">
                                <Option v-for="item in settlementCurrency" :value="item.value" :key="item.value"></Option>
                            </Select>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>服务时间</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <CheckboxGroup v-model="weekDates1" style="width: 440px; display: inline-block;">
                                <Checkbox label="1">星期一</Checkbox>
                                <Checkbox label="2">星期二</Checkbox>
                                <Checkbox label="3">星期三</Checkbox>
                                <Checkbox label="4">星期四</Checkbox>
                                <Checkbox label="5">星期五</Checkbox>
                                <Checkbox label="6">星期六</Checkbox>
                                <Checkbox label="7">星期日</Checkbox>
                            </CheckboxGroup>
                            <Icon @click="addTime" v-if="weekDates1.length<7" style="cursor: pointer" type="ios-plus" size="20"></Icon>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left"></div>
                        <div class="right">
                            <Checkbox v-model="selectedValue1"></Checkbox>
                            <span>每天的</span>
                            <TimePicker format="HH:mm" :steps="[1, 60]"  :value="timeValue1" placeholder="选择时间" style="width: 112px"></TimePicker>
                            <span>到</span>
                            <TimePicker format="HH:mm" :steps="[1, 60]"  :value="timeValue2" placeholder="选择时间" style="width: 112px"></TimePicker>
                            <span>处理</span>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime" v-if="false">
                        <div class="left"></div>
                        <div class="right">
                            <span>请选择</span>
                            <CheckboxGroup v-model="weekDates2" style="width: 470px; display: inline-block;">
                                <Checkbox label="1">星期一</Checkbox>
                                <Checkbox label="2">星期二</Checkbox>
                                <Checkbox label="3">星期三</Checkbox>
                                <Checkbox label="4">星期四</Checkbox>
                                <Checkbox label="5">星期五</Checkbox>
                                <Checkbox label="6">星期六</Checkbox>
                                <Checkbox label="7">星期六</Checkbox>
                            </CheckboxGroup>
                            <Icon type="ios-plus" size="20" style="margin-right: 10px;"></Icon>
                            <Icon type="ios-close" size="20"></Icon>
                        </div>
                    </div>
                    <div class="sameStyle name" v-if="false">
                        <div class="left"></div>
                        <div class="right">
                            <Checkbox v-model="selectedValue2"></Checkbox>
                            <span>每天的</span>
                            <TimePicker format="HH:mm" :steps="[1, 60]"  :value="timeValue1" placeholder="选择时间" style="width: 112px"></TimePicker>
                            <span>到</span>
                            <TimePicker format="HH:mm" :steps="[1, 60]"  :value="timeValue2" placeholder="选择时间" style="width: 112px"></TimePicker>
                            <span>处理</span>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>可开具发票类型</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <CheckboxGroup v-model="invoiceData" style="width: 540px; display: inline-block;">
                                <Checkbox label="代订房费"></Checkbox>
                                <Checkbox label="代订住宿费"></Checkbox>
                                <Checkbox label="旅游服务费"></Checkbox>
                                <Checkbox label="会议服务费"></Checkbox>
                                <Checkbox label="住宿费"></Checkbox>
                                <Checkbox label="旅游费"></Checkbox>
                                <Checkbox label="其他"></Checkbox>
                            </CheckboxGroup>
                            <Input v-model="invoiceValue" style="width: 200px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>上架渠道</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <Checkbox :indeterminate="indeterminate" :value="channelAll" @click.prevent.native="channelCheckAll">全选</Checkbox>
                            <CheckboxGroup v-model="channelData" style="display: inline-block;" @on-change="checkAllChannel">
                                <Checkbox label="网站前台"></Checkbox>
                                <Checkbox label="酒店APP"></Checkbox>
                                <Checkbox label="网站差旅"></Checkbox>
                                <Checkbox label="薪福卡（大客户）"></Checkbox>
                                <Checkbox label="齐采网（大客户）"></Checkbox>
                                <Checkbox label="大连航空（大客户）"></Checkbox>
                            </CheckboxGroup>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>是否含有物理房型</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <RadioGroup v-model="physicalRoom">
                                <Radio label="是"></Radio>
                                <Radio label="否"></Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>报价天数</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <RadioGroup v-model="priceDays">
                                <Radio label="90天"></Radio>
                                <Radio label="其它"></Radio>
                            </RadioGroup>
                            <Input v-model="priceDaysValue" style="width: 200px"></Input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <Button type="primary" @click="goToNext" style="margin-right: 15px;">下一步</Button>
                <Button type="warning">返回</Button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            // 控制当前的步骤
            current:0,
            // 供应商名称
            supplierName:'',
            //供应商接入方式的数据
            selectAccessType:'',
            AccessType:[
                {
                    value: 'Ebooking',
                    label: '1'
                },
                {
                    value: 'API直连',
                    label: '2'
                },
                {
                    value: '平台',
                    label: '3'
                }
            ],
            // 供应商接入方式
            selectPlatformName:'',
            platformName:[
                {
                    value: '泰坦云',
                    label: '1'
                },
                {
                    value: '畅联',
                    label: '2'
                },
            ],
            // 平台供应商识别码
            platformCode:'',
            // 报价币种
            selectQuotedCurrency:'',
            quotedCurrency:[
                {
                    value: 'CNY人民币',
                    label: '1'
                },
                {
                    value: 'USD美元',
                    label: '2'
                },
                {
                    value: 'EUR欧元',
                    label: '3'
                },
                {
                    value: 'JPY日元',
                    label: '4'
                },
                {
                    value: 'HKD港币',
                    label: '5'
                },
                {
                    value: 'KER韩元',
                    label: '6'
                },
                {
                    value: 'SGD新元',
                    label: '7'
                },
                {
                    value: 'THB泰铢',
                    label: '8'
                },
                {
                    value: 'CAD加元',
                    label: '9'
                }
            ],
            // 结算币种
            selectSettlementCurrency:'',
            settlementCurrency:[
                {
                    value: 'CNY人民币',
                    label: '1'
                },
                {
                    value: 'USD美元',
                    label: '2'
                },
                {
                    value: 'EUR欧元',
                    label: '3'
                },
                {
                    value: 'JPY日元',
                    label: '4'
                },
                {
                    value: 'HKD港币',
                    label: '5'
                },
                {
                    value: 'KER韩元',
                    label: '6'
                },
                {
                    value: 'SGD新元',
                    label: '7'
                },
                {
                    value: 'THB泰铢',
                    label: '8'
                },
                {
                    value: 'CAD加元',
                    label: '9'
                }
            ],
            // 多选框
            weekDates1:['1','2','3','4','5','6','7'],
            weekDates2:[],
            // 时间默认值
            selectedValue1:true,
            selectedValue2:true,
            timeValue1:'00:00',
            timeValue2:'23:00',
            // 发票
            invoiceData:[],
            invoiceValue:'',
            // 上架渠道
            selectChannel:'',
            channelData:['网站前台','酒店APP','网站差旅','薪福卡（大客户）','齐采网（大客户）','大连航空（大客户）'],
            indeterminate: true,// iView自带样式
            channelAll:false,
            // 物理房型
            physicalRoom:'是',
            // 报价天数
            priceDays:'90天',
            priceDaysValue:'',
        }
    },
    methods:{
        // 上架渠道全选(iView上的代码)
        channelCheckAll(){
            if (this.indeterminate) {
                this.channelAll = false;
            } else {
                this.channelAll = !this.channelAll;
            }
            this.indeterminate = false;

            if (this.channelAll) {
                this.channelData = ['网站前台','酒店APP','网站差旅','薪福卡（大客户）','齐采网（大客户）','大连航空（大客户）'];
            } else {
                this.channelData = [];
            }
        },
        // 上架渠道反选(iView上的代码)
        checkAllChannel(data){
            if (data.length === 6) {
                this.indeterminate = false;
                this.channelAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.channelAll = false;
            } else {
                this.indeterminate = false;
                this.channelAll = false;
            }
        },
        // 添加时间
        addTime(){

        },
        // 下一步
        goToNext(){
            this.$router.push({
                name:'step2'
            });
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
.supplierWrap{
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    .supplierStep{
        height: 10%;
        padding-top: 10px;
        padding-bottom: 15px;
    }
    .stepOne{
        width: 100%;
        height: 90%;
        .content{
            height: 88%;
            width: 100%;
            border: 1px solid #e9eaec;
            overflow-y: auto;
            .main{
                height: 100%;
                width: 100%;
                .sameStyle{
                    border-bottom: 1px solid #e9eaec;
                    height: 50px;
                    .left{
                        float: left;
                        width: 10%;
                        text-align: center;
                        border-right: 1px solid #e9eaec;
                        em{
                            color: red;
                            display: inline-block;
                            margin-right: 2px;
                        }
                    }
                    .right{
                        float: left;
                        width: 90%;
                        padding-left: 10px;
                    }
                }
                .name{
                    height: 48px;
                    .left,.right{
                        height: 48px;
                        line-height: 48px;
                    }
                }
                .serviceTime{
                    .right{
                        span{
                            display: inline-block;
                            margin-right: 10px;
                        }
                        label{
                            display: inline-block;
                            margin-right: 5px;
                        }
                    }
                }
                .invoice{
                    div{
                        width: 550px;
                    }
                }
                div:nth-last-of-type(1){
                    border-bottom: none;
                }
            }
        }
        .btn{
            width: 150px;
            margin: 25px auto 0;
        }
    }
    .stepTwo{
        height: 72%;
        .btn{
            width: 220px;
            margin: 50px auto 0;
        }
    }
}
</style>