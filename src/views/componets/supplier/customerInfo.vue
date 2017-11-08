<template>
    <section class="infoWrap">
        <div class="main">
            <div class="same">
                <div class="left">
                    <span>联系人姓名:</span>
                    <Input v-model="nameValue" style="width: 200px"></Input>
                </div>
                <div class="right">
                    <span>联系人电话:</span>
                    <Input v-model="phoneValue" style="width: 200px"></Input>
                </div>
            </div>
            <div class="same">
                <div class="left">
                    <span>职务:</span>
                    <Input v-model="jobValue" style="width: 200px"></Input>
                </div>
                <div class="right">
                    <span>联系人邮箱:</span>
                    <Input v-model="emailValue" style="width: 200px"></Input>
                </div>
            </div>
            <div class="same">
                <div class="left">
                    <span>传真:</span>
                    <Input v-model="jobValue" style="width: 200px"></Input>
                </div>
                <div class="right">
                    <span>联系人QQ:</span>
                    <Input v-model="qqValue" style="width: 200px"></Input>
                </div>
            </div>
            <div class="same">
                <div class="left">
                    <span>客服电话:</span>
                    <Input v-model="customerPhone" style="width: 200px"></Input>
                </div>
                <div class="right">
                    <span>联系人微信:</span>
                    <Input v-model="weixinValue" style="width: 200px"></Input>
                </div>
            </div>
            <div class="supplierAddress">
                <span class="text">供应商地址:</span>
                <div class="address">
                    <Input v-model="addressValue" style="width: 626px;"></Input>
                </div>
            </div>
            <div class="tips">
                <span class="text">备注:</span>
                <div class="tipsCon">
                    <Input v-model="tipsValue" type="textarea" :rows="4" style="width: 626px;"></Input>
                </div>
            </div>
        </div>
        <div class="btn">
            <Button type="primary" style="margin-right: 20px;">保存</Button>
            <Button type="warning">返回</Button>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            // 联系人姓名
            nameValue:'',
            // 联系人电话
            phoneValue:'',
            // 职务
            jobValue:'',
            // 联系人邮箱
            emailValue:'',
            // 传真
            faxValue:'',
            // 联系人qq
            qqValue:'',
            // 客服电话
            customerPhone:'',
            // 联系人微信
            weixinValue:'',
            // 供应商地址
            addressValue:'',
            // 备注
            tipsValue:''
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
.infoWrap{
    width: 100%;
    height: 100%;
    .main{
        width: 700px;
        height: 400px;
        margin-top: 30px;
        margin-left: 30px;
        .same{
            width: 100%;
            height: 30px;
            margin-bottom: 20px;
            .left{
                float: left;
                span{
                    display: inline-block;
                    width: 70px;
                }
            }
            .right{
                float: right;
                span{
                    display: inline-block;
                    width: 70px;
                }
            }
        }
        .supplierAddress{
            height: 32px;
            width: 100%;
            margin-bottom: 20px;
            .text{
                width: 70px;
                float: left;
                height: 32px;
                line-height: 32px;
            }
            .address{
                float: right;
            }
        }
        .tips{
            .text{
                width: 70px;
                float: left;
            }
            .tipsCon{
                float: right;
            }
        }
    }
    .btn{
        width: 150px;
        margin-left: 350px;
    }
}
</style>