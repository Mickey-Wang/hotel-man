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
                                <Option v-for="item in AccessType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span><em>*</em>平台名称</span>
                            <Select :disabled="selectAccessType!=1" v-model="selectPlatformName" style="width:260px;margin-right:20px;" placeholder="请选择">
                                <Option v-for="item in platformName" :value="item.value" :key="item.value"></Option>
                            </Select>
                            <span>平台供应商识别码</span>
                            <Input :disabled="selectAccessType!=1" v-model="platformCode" placeholder="请输入..." style="width: 260px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>报价币种</span>
                        </div>
                        <div class="right">
                            <Select v-model="selectQuotedCurrency" style="width:260px;margin-right:20px;">
                                <Option v-for="item in quotedCurrency" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>结算币种</span>
                        </div>
                        <div class="right">
                            <Select v-model="selectSettlementCurrency" style="width:260px;margin-right:20px;">
                                <Option v-for="item in settlementCurrency" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <div v-for="(dateLine, index) in dateLines">
                        <div class="sameStyle name serviceTime">
                            <div class="left" style="border-bottom: 1px solid #e9eaec">
                                <span><em>*</em>服务时间</span>
                            </div>
                            <div class="right" style="border-bottom: 1px solid #e9eaec">
                                <span>请选择</span>
                                <template v-for="(showDay, index) in showDays(dateLine)">
                                    <input type="checkbox" v-model="showDay.select" :disabled="showDay.disable" @click="changeSelect(dateLine, showDay)" />{{dayText[index]}}
                                </template>
                                <div style="display: inline-block" v-if="selectedDays.length<7&&index==0" @click="addTime"><Icon type="ios-plus" size="20"></Icon></div>
                                <div style="display: inline-block" v-if="index!=0"  @click="removeDateLine(index)"><Icon type="ios-close" size="20"></Icon></div>
                            </div>
                        </div>
                        <div class="sameStyle name" style="border-bottom: 1px solid #e9eaec">
                            <div class="left"></div>
                            <div class="right">
                                <Checkbox v-model="selectedValue1"></Checkbox>
                                <span>每天的</span>
                                <TimePicker format="HH:mm" :steps="[1, 60]" v-model="dateLine.start" placeholder="选择时间" style="width: 112px"></TimePicker>
                                <span>到</span>
                                <TimePicker format="HH:mm" :steps="[1, 60]" v-model="dateLine.end" placeholder="选择时间" style="width: 112px"></TimePicker>
                                <span>处理</span>
                            </div>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>可开具发票类型</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <CheckboxGroup v-model="invoiceData" style="width: 540px; display: inline-block;">
                                <Checkbox label=1>代订房费</Checkbox>
                                <Checkbox label=2>代订住宿费</Checkbox>
                                <Checkbox label=3>旅游服务费</Checkbox>
                                <Checkbox label=4>会议服务费</Checkbox>
                                <Checkbox label=5>住宿费</Checkbox>
                                <Checkbox label=6>旅游费</Checkbox>
                                <Checkbox label=7>其他</Checkbox>
                            </CheckboxGroup>
                            <Input v-if="showInvioceInput" v-model="invoiceValue" style="width: 200px"></Input>
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
                                <Checkbox label="2">网站前台</Checkbox>
                                <Checkbox label="3">酒店APP</Checkbox>
                                <Checkbox label="4">网站差旅</Checkbox>
                                <Checkbox label="5">薪福卡（大客户）</Checkbox>
                                <Checkbox label="6">齐采网（大客户）</Checkbox>
                                <Checkbox label="7">大连航空（大客户）</Checkbox>
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
                                <Radio label='0'>是</Radio>
                                <Radio label='1'>否</Radio>
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
                                <Radio label=90>90天</Radio>
                                <Radio label="其它"></Radio>
                            </RadioGroup>
                            <Input v-if="showDaysInput" v-model="priceDaysValue" style="width: 200px"></Input>
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
            // 平台选择
            selectPlatformName:'',
            platformName:[
                {
                    value: '泰坦云',
                    label: '泰坦云'
                },
                {
                    value: '畅联',
                    label: '畅联'
                },
            ],
            // 平台供应商识别码
            platformCode:'',
            // 报价币种
            selectQuotedCurrency:1,
            quotedCurrency:[
                {
                    value: 1,
                    label: 'CNY人民币'
                },
                {
                    value: 2,
                    label: 'USD美元'
                },
                {
                    value: 3,
                    label: 'EUR欧元'
                },
                {
                    value: 4,
                    label: 'JPY日元'
                },
                {
                    value: 5,
                    label: 'HKD港币'
                },
                {
                    value: 6,
                    label: 'KER韩元'
                },
                {
                    value: 7,
                    label: 'SGD新元'
                },
                {
                    value: 8,
                    label: 'THB泰铢'
                },
                {
                    value: 9,
                    label: 'CAD加元'
                }
            ],
            // 结算币种
            selectSettlementCurrency: 1,
            settlementCurrency:[
                {
                    value: 1,
                    label: 'CNY人民币'
                },
                {
                    value: 2,
                    label: 'USD美元'
                },
                {
                    value: 3,
                    label: 'EUR欧元'
                },
                {
                    value: 4,
                    label: 'JPY日元'
                },
                {
                    value: 5,
                    label: 'HKD港币'
                },
                {
                    value: 6,
                    label: 'KER韩元'
                },
                {
                    value: 7,
                    label: 'SGD新元'
                },
                {
                    value: 8,
                    label: 'THB泰铢'
                },
                {
                    value: 9,
                    label: 'CAD加元'
                }
            ],
            // 时间选择
            // 周一到周日默认全部选择
            allDays: [1, 2, 3, 4, 5, 6,7],
            // 循环展示的时间
            dateLines: [{selectedDays: [1, 2, 3, 4, 5, 6, 7], start: '00:00', end: '23:00'}],
            // 日期展示的文字
            dayText:['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
            // 时间默认值
            selectedValue1:true,
            timeValue1:'00:00',
            timeValue2:'23:59',
            // 发票
            invoiceData:[],
            invoiceValue:'',
            // 上架渠道
            channelData:['2','3','4','5','6','7'],
            indeterminate: true,// iView自带样式
            channelAll:false,
            // 物理房型,0代表是
            physicalRoom:0,
            // 报价天数
            priceDays:90,
            priceDaysValue:'',
        }
    },
    watch: {
        dateLines: {
            handler () {
                //console.log('watch dateLines', this.dateLines);
                for (var i = 0; i < this.dateLines.length; i++) {
                    var dateLine = this.dateLines[i];
                    if (typeof(dateLine.start) !== 'string') {
                        dateLine.start = this.dateToTimeStr(dateLine.start);
                    }
                    if (typeof(dateLine.end) !== 'string') {
                        dateLine.end = this.dateToTimeStr(dateLine.end);
                    }
                }
            },
            deep: true
        }
    },
    computed:{
        // 服务时间的逻辑
        selectedDays(){
            var selectedDays = [];
            for (var i = 0; i < this.dateLines.length; i++) {
                var dateLine = this.dateLines[i];
                for (var j = 0; j < dateLine.selectedDays.length; j++) {
                    selectedDays.push(dateLine.selectedDays[j]);
                }
            }
            //console.log('selectedDays:', selectedDays);
            return selectedDays;
        },
        isAllSelect () {
            return this.selectedDays.length === 7;
        },
        // 显示发票input的条件
        showInvioceInput(){
            if(this.invoiceData.indexOf('7')!=-1){
                return true;
            }else {
                return false;
            }
        },
        // 显示报价天数的输入框是否显示
        showDaysInput(){
            if(this.priceDays!=90){
                return true;
            }else {
                return false;
            }
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
        // 以下为添加时间的逻辑
        addTime(){
            if (this.isAllSelect) {
                return;
            }
            this.dateLines.push({selectedDays: [], start: '00:00', end: '23:00'});
        },
        showDays: function (dateLine) {
            //console.log('showDays. dateLine:', dateLine);
            var showDays = [];
            for (var i = 0; i < this.allDays.length; i++) {
                var day = this.allDays[i];
                var flag = false;
                for (var j = 0; j < dateLine.selectedDays.length; j++) {
                    var selectedDay = dateLine.selectedDays[j];
                    if (day === selectedDay) {
                        flag = true;
                        break;
                    }
                }
                showDays.push({
                    day: day,
                    select: flag,
                    disable: false
                });
            }
            for (var i = 0; i < showDays.length; i++) {
                var showDay = showDays[i];
                var flag = false;
                for (var j = 0; j < this.selectedDays.length; j++) {
                    var selectedDay = this.selectedDays[j];
                    if (!showDay.select && showDay.day === selectedDay) {
                        flag = true;
                        break;
                    }
                }
                showDay['disable'] = flag;
            }
            //console.log('showDays', showDays);
            return showDays;
        },
        changeSelect: function (dateLine, showDay) {
            //console.log('changeSelect. dateLine:', dateLine, ", showDay:", showDay);
            if (!showDay.select) {
                var selectedDays = [];
                for (var i = 0; i < dateLine.selectedDays.length; i++) {
                    if (dateLine.selectedDays[i] != showDay.day) {
                        selectedDays.push(dateLine.selectedDays[i]);
                    }
                }
                dateLine.selectedDays = selectedDays;
            } else {
                dateLine.selectedDays.push(showDay.day);
            }
        },
        removeDateLine(index){
            //console.log('删除的index:',index);
            this.dateLines.splice(index, 1);
        },
        //以上添加的时间的逻辑
        // 下一步
        goToNext(){
            // 判断一下必填部分，平台供应商识别码和是否含有物理房型不是必须
            let firstStepMsg = {
                supplierName:this.supplierName,
                selectAccessType:this.selectAccessType,
                selectPlatformName:this.selectPlatformName,
                platformCode:this.platformCode,
                selectQuotedCurrency:this.selectQuotedCurrency,
                selectSettlementCurrency:this.selectSettlementCurrency,
                dateLines:this.dateLines,
                invoiceData:this.invoiceData,
                channelData:this.channelData,
                physicalRoom:this.physicalRoom,
                priceDays:this.priceDays
            };
            console.log('点击下一步的时候保存信息:',firstStepMsg);
            /*this.$router.push({
                name:'step2'
            });*/
        },
        // 时间格式化
        dateToTimeStr(date) {
            var timeStr = '';
            var hour = date.getHours();
            if (hour < 10) {
                timeStr += '0';
            }
            timeStr += hour + ':';
            var minute = date.getMinutes();
            if (minute < 10) {
                timeStr += '0';
            }
            timeStr += minute;
            return timeStr;
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
    .errBorder{
        border: 1px solid red;
    }
}
</style>