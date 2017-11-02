<template>
    <section class="supplierWrap">
        <div class="supplierStep">
            <Steps :current="current">
                <Step title="步骤1" content="基本信息"></Step>
                <Step title="步骤2" content="结算及佣金配置"></Step>
                <Step title="完成"></Step>
            </Steps>
        </div>
        <div class="content">
            <div class="sameStyle name">
                <div class="left">
                    <span><em>*</em>供应商名称</span>
                </div>
                <div class="right">
                    <Input  v-model="supplierName" placeholder="请输入..." style="width: 260px"></Input>
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
                    <Select v-model="selectPlatformName" style="width:260px;margin-right:20px;" placeholder="请选择">
                        <Option v-for="item in platformName" :value="item.value" :key="item.value"></Option>
                    </Select>
                    <span>平台供应商识别码</span>
                    <Input v-model="platforCode" placeholder="请输入..." style="width: 260px"></Input>
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
                    <input type="checkbox" id="one" value="星期一" v-model="checkedDates1">
                    <label for="one">星期一</label>
                    <input type="checkbox" id="two" value="星期二" v-model="checkedDates1">
                    <label for="two">星期二</label>
                    <input type="checkbox" id="three" value="星期三" v-model="checkedDates1">
                    <label for="three">星期三</label>
                    <input type="checkbox" id="four" value="星期四" v-model="checkedDates1">
                    <label for="four">星期四</label>
                    <input type="checkbox" id="five" value="星期五" v-model="checkedDates1">
                    <label for="five">星期三</label>
                    <input type="checkbox" id="six" value="星期六" v-model="checkedDates1">
                    <label for="six">星期六</label>
                    <input type="checkbox" id="seven" value="星期日" v-model="checkedDates1">
                    <label for="seven">星期日</label>
                    <Icon type="ios-plus" size="20"></Icon>
                </div>
            </div>
            <div class="sameStyle name">
                <div class="left"></div>
                <div class="right">
                    <input type="checkbox">
                    <span>每天的</span>
                    <TimePicker format="HH:mm" :steps="[1, 60]"  :value="timeValue1" placeholder="选择时间" style="width: 112px"></TimePicker>
                    <span>到</span>
                    <TimePicker format="HH:mm" :steps="[1, 60]"  :value="timeValue2" placeholder="选择时间" style="width: 112px"></TimePicker>
                    <span>处理</span>
                </div>
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
            platforCode:'',
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
            checkedDates1:['星期一','星期二','星期三','星期四','星期五'],
            // 时间默认值
            timeValue1:'00:00',
            timeValue2:'23:00'
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
.supplierWrap{
    .supplierStep{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .content{
        height: 100%;
        width: 100%;
        border: 1px solid #e9eaec;
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
            height: 50px;
            .left,.right{
                height: 50px;
                line-height: 50px;
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
    }
}
</style>