<template>
    <section class="checkWrap">
        <div class="step step1">
            <p class="title">1 基本信息</p>
            <div class="same">
                <span class="left"><em>*</em>供应商名称</span>
                <div class="right">
                    <span>xxx专营店</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>供应商接入方式</span>
                <div class="right">
                    <span>xxx专营店</span>
                    <em>平台名称:</em>
                    <span>泰坦云</span>
                    <em>平台供应商识别码:</em>
                    <span>123456</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>报价币种</span>
                <div class="right">
                    <span>CNY人民币</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>结算币种</span>
                <div class="right">
                    <span>CNY人民币</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>服务时间</span>
                <div class="right">
                    <em>请选择</em>
                    <CheckboxGroup v-model="weekDates1" style="width: 500px; display: inline-block;">
                        <Checkbox label="1" :disabled="true">星期一</Checkbox>
                        <Checkbox label="2" :disabled="true">星期二</Checkbox>
                        <Checkbox label="3" :disabled="true">星期三</Checkbox>
                        <Checkbox label="4" :disabled="true">星期四</Checkbox>
                        <Checkbox label="5" :disabled="true">星期五</Checkbox>
                        <Checkbox label="6" :disabled="true">星期六</Checkbox>
                        <Checkbox label="7" :disabled="true">星期日</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>
            <div class="same">
                <span class="left"></span>
                <div class="right time">
                    <Checkbox v-model="selectedValue1" :disabled="true" style="margin-left: 20px;"></Checkbox>
                    每天的<span>8:00</span> 到 <span>18:00</span> 处理
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>可开发票类型</span>
                <div class="right">
                    <em>请选择</em>
                    <CheckboxGroup v-model="invoiceData" style="width: 530px; display: inline-block;">
                        <Checkbox label="代订房费" :disabled="true">代订房费</Checkbox>
                        <Checkbox label="代订住宿费" :disabled="true">代订住宿费</Checkbox>
                        <Checkbox label="旅游服务费" :disabled="true">旅游服务费</Checkbox>
                        <Checkbox label="会议服务费" :disabled="true">会议服务费</Checkbox>
                        <Checkbox label="住宿费" :disabled="true">住宿费</Checkbox>
                        <Checkbox label="旅游费" :disabled="true">旅游费</Checkbox>
                        <Checkbox label="其他" :disabled="true">其他</Checkbox>
                    </CheckboxGroup>
                    <span>xxx</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>上架渠道</span>
                <div class="right">
                    <em>请选择</em>
                    <CheckboxGroup v-model="channelData" style="width: 700px; display: inline-block;">
                        <Checkbox label="网站前台" :disabled="true">网站前台</Checkbox>
                        <Checkbox label="酒店APP" :disabled="true">酒店APP</Checkbox>
                        <Checkbox label="网站差旅" :disabled="true">网站差旅</Checkbox>
                        <Checkbox label="薪福卡（大客户）" :disabled="true">薪福卡（大客户）</Checkbox>
                        <Checkbox label="齐采网（大客户）" :disabled="true">齐采网（大客户）</Checkbox>
                        <Checkbox label="大连航空（大客户）" :disabled="true">大连航空（大客户）</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>是否含有物理房型</span>
                <div class="right">
                    <em>请选择</em>
                    <RadioGroup v-model="physicalRoom">
                        <Radio label="是" disabled></Radio>
                        <Radio label="否" disabled></Radio>
                    </RadioGroup>
                </div>
            </div>
        </div>
        <div class="step step2">
            <p class="title">2 结算及佣金配置</p>
            <div class="same">
                <span class="left"><em>*</em>pop商家编号</span>
                <div class="right">
                    <span>345678</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>pop公司名称</span>
                <div class="right">
                    <span>xxx公司</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>pop店铺名称</span>
                <div class="right">
                    <span>平台</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>支付方式</span>
                <div class="right">
                    <em>请选择</em>
                    <RadioGroup v-model="payType">
                        <Radio label="预付" disabled>预付</Radio>
                        <Radio label="现付" disabled>现付</Radio>
                    </RadioGroup>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>报价类型及结算方式</span>
                <div class="right">
                    <em>请选择</em>
                    <RadioGroup v-model="offerType">
                        <Radio label="底价" disabled>底价 <span style="color: #2d8cf0">结算方式(底价结算)</span></Radio>
                        <Radio label="售价" disabled>售价 <span style="color: #2d8cf0">结算方式(固定比例先返佣)</span></Radio>
                    </RadioGroup>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>返佣比例</span>
                <div class="right">
                    <span>5.25</span>%
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>结算订单状态</span>
                <div class="right">
                    <span>已确认</span>
                </div>
            </div>
            <div class="same">
                <span class="left"><em>*</em>价格策略</span>
                <div class="right">
                    <em>请输入</em>
                    <CheckboxGroup v-model="priceStrategy" style="width: 800px; display: inline-block;">
                        <Checkbox label="1" disabled>百分比</Checkbox>
                        <span>xx</span>%
                        <Checkbox label="2" disabled style="margin-left: 10px;">固定金额</Checkbox>
                        <span>xx</span>
                    </CheckboxGroup>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            // 服务时间
            weekDates1:['1','2','3'],
            selectedValue1:true,
            // 发票类型
            invoiceData:['代订房费','代订住宿费'],
            // 上架渠道
            channelData:['网站前台'],
            // 物理房型
            physicalRoom:'是',
            // 支付方式
            payType:'预付',
            //报价类型及结算方式
            offerType:'',
            // 价格策略
            priceStrategy:[]
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
.checkWrap{
    .step1{
        width: 100%;
        height: 314px;
        margin-bottom: 10px;
        border:1px solid #e9eaec;
    }
    .step2{
        width: 100%;
        height: 284px;
        border:1px solid #e9eaec;
    }
    .step{
        .title{
            color: #2d8cf0;
            font-size: 14px;
            line-height: 34px;
        }
        .same{
            width: 100%;
            height: 31px;
            border-top:1px solid #e9eaec;
            .left{
                width: 10%;
                height: 31px;
                line-height: 31px;
                float: left;
                border-right:1px solid #e9eaec;
                text-align: center;
                em{
                    color: red;
                    display: inline-block;
                    margin-right: 2px;
                }
            }
            .right{
                height: 30px;
                line-height: 30px;
                span{
                    display: inline-block;
                    width: 220px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    border:1px solid #e9eaec;
                    border-radius: 3px;
                }
                em{
                    display: inline-block;
                    font-style: normal;
                    margin-left: 20px;
                    margin-right: 5px;
                }
                span:nth-of-type(1){
                    margin-left: 20px;
                }
            }

        }
    }

}
</style>