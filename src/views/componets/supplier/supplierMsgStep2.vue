<template>
    <section class="supplierWrap">
        <div class="supplierStep">
            <Steps :current="current">
                <Step title="步骤1" content="基本信息"></Step>
                <Step title="步骤2" content="结算及佣金配置"></Step>
                <Step title="完成"></Step>
            </Steps>
        </div>
        <div class="stepOne" v-if="current==1">
            <div class="content">
                <div class="main">
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>pop商家编号</span>
                        </div>
                        <div class="right">
                            <Input v-model="businessNumber" placeholder="请输入..." style="width: 260px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>pop公司名称</span>
                        </div>
                        <div class="right">
                            <Input v-model="companyNumber" placeholder="请输入..." style="width: 260px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>pop店铺名称</span>
                        </div>
                        <div class="right">
                            <Input v-model="shopName" placeholder="请输入..." style="width: 260px"></Input>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>支付方式</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <RadioGroup v-model="payType">
                                <Radio label="预付"></Radio>
                                <Radio label="现付"></Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span><em>*</em>报价类型及结算方式</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <RadioGroup v-model="offerType">
                                <Radio label="底价">底价 <span style="color: #2d8cf0">结算方式(底价结算)</span></Radio>
                                <Radio label="售价">售价 <span style="color: #2d8cf0">结算方式(固定比例先返佣)</span></Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>返佣比例</span>
                        </div>
                        <div class="right">
                            <Input v-model="proportion" placeholder="请输入..." style="width: 260px"></Input>%
                        </div>
                    </div>
                    <div class="sameStyle name">
                        <div class="left">
                            <span><em>*</em>结算订单状态</span>
                        </div>
                        <div class="right">
                            <Select v-model="selectOrderStatus" style="width:260px;margin-right:20px;" placeholder="请选择">
                                <Option v-for="item in orderStatus" :value="item.value" :key="item.value"></Option>
                            </Select>
                        </div>
                    </div>
                    <div class="sameStyle name serviceTime">
                        <div class="left">
                            <span>价格策略</span>
                        </div>
                        <div class="right">
                            <span>请选择</span>
                            <CheckboxGroup v-model="priceStrategy" style="width: 440px; display: inline-block;">
                                <Checkbox label="1">百分比</Checkbox>
                                <Input v-model="pricePercent" placeholder="请输入百分比" style="width: 100px;margin-right: 10px;"></Input>
                                <Checkbox label="2">固定金额</Checkbox>
                                <Input v-model="fixedPrice" placeholder="请输入固定金额" style="width: 100px"></Input>
                            </CheckboxGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <Button type="primary" style="margin-right: 10px;">完成</Button>
                <Button type="warning" style="margin-right: 10px;" @click="goToBack">上一步</Button>
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
            current:1,
            // pop商家编号
            businessNumber:'',
            // pop公司名称
            companyNumber:'',
            // pop店铺名称
            shopName:'',
            // 支付方式
            payType:'',
            //报价类型及结算方式
            offerType:'',
            //返佣比例
            proportion:'',
            // 订单状态
            selectOrderStatus:'',
            orderStatus:[
                {
                    value: '已确认',
                    label: '1'
                },
                {
                    value: '已离店',
                    label: '2'
                },
                {
                    value:'新订单',
                    label:'3'
                }
            ],
            // 价格策略
            priceStrategy:[],
            //价格比例
            pricePercent:'',
            //固定价格
            fixedPrice:''
        }
    },
    created(){

    },
    methods:{
        // 上一步
        goToBack(){
            this.$router.push({
                name:'step1'
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
            height: 72%;
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
                width: 220px;
                margin: 50px auto 0;
            }
        }
    }
</style>