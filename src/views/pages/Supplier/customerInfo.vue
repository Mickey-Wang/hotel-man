<template>
    <div class="layout-row">
        <Row class="layout-row">
            <customerInfo></customerInfo>
        </Row>
    </div>
</template>
<style lang="less" scoped>
    .layout-row {
        height: 100%;
    }
    @height: 100%;
    .layout-content-main {
        padding: 10px;
        height: @height;
        .layout-content-main-base {
            height: @height;
            border: 1px dashed #ddd;
            padding: 2px;
        }
        .layout-content-main-left {
            .layout-content-main-base;
        }
        .layout-content-main-right {
            .layout-content-main-base;
        }
    }
</style>

<script>
    import customerInfo from '../../componets/supplier/customerInfo.vue'
    export default {
        data() {
            return {

            }
        },
        components: {
            customerInfo
        }
    }
</script>