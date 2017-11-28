<style lang="less" scoped>
.container {
    .title {
        text-align: center;
    }
}
</style>
<template>
    <div class="container">
        <!-- 判断查看、新增酒店 -->
        <h2 v-if="!isHotelAdd">酒店ID  : {{hotelId}}  {{hotelName}}</h2>
        <h2 class="title" v-else>新增酒店</h2>
        <!-- tab -->
        <Tabs class="tab" value="name1">
            <TabPane label="酒店基本信息" name="name1">
                <baseInfo :isHotelAdd="isHotelAdd"></baseInfo>
            </TabPane>
            <TabPane label="酒店设施" name="name2">
                <facility></facility>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import baseInfo from '../../../componets/hotel/baseInfo';
import facility from '../../../componets/hotel/facility';
export default {
    data() {
        return {
            hotelId: '', // 酒店ID
            hotelName: '', // 酒店名称
            isHotelAdd: true // 判断查看、新增酒店,true：新增酒店
        }
    },
    mounted() {
        this.hotelId = this.$route.query.id;
        this.hotelName = this.$route.query.name;
        if (this.$route.query.id) {
            this.isHotelAdd = false;
        }
    },
    methods: {},
    components: {
        baseInfo,
        facility
    }
}
</script>