<template>
    <section>
        <div class="conditions">
            <div class="conditions-top">
                <Select v-model="selectAccessType" style="width:200px" placeholder="全部">
                    <Option v-for="item in AccessType" :value="item.value" :key="item.value"></Option>
                </Select>
            </div>
            <div class="conditions-bottom"></div>
        </div>
        <div class="table"></div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            //供应商接入方式的数据
            selectAccessType:'',
            AccessType:[
                {
                    value: '全部',
                    label: '0'
                },
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
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">

</style>