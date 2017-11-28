<style lang="less" scoped>
.container {
    .title {
        text-align: center;
    }
}
</style>
<template>
    <div class="container">
        <h2 class="title" v-if="isRoomAdd">新增房型</h2>
        <h2>酒店ID:{{hotelId}} {{hotelName}}</h2>
        <Tabs class="tab" value="name1">
            <TabPane label="房间基本信息" name="name1">
                <baseInfo></baseInfo>
            </TabPane>
            <TabPane label="房间设施" name="name2">
                <facility></facility>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import baseInfo from '../../../componets/hotel/roomBaseInfo';
import facility from '../../../componets/hotel/roomFacility';
export default {
    data() {
        return {
            hotelId: '', // 酒店ID
            hotelName: '', // 酒店名称
            isRoomAdd: true // 判断编辑、新增房型,true：新增房型
        }
    },
    mounted () {
        this.hotelId = this.$route.query.id;
        this.hotelName = this.$route.query.name;
        // 判断类型，edit：编辑，new：新增
        if (this.$route.query.type === 'edit') {
            this.isRoomAdd = false;
        }
    },
    components: {
        baseInfo,
        facility
    }
}
</script>