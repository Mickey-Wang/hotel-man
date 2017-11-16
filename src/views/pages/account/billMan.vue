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
<template>
    <div class="layout-row">
        <Row className="layout-row">
            <Row type="flex" justify="left" align="middle">
                <Col span="12">
                <span>账单日期：</span><DatePicker type="month" placeholder="账单年月" style="width: 200px"></DatePicker>
                <span>——</span>
                <DatePicker type="month" placeholder="账单年月" style="width: 200px"></DatePicker>
                </Col>
                <Col span="12"><span>导入日期：</span><DatePicker type="daterange" placeholder="导入日期" style="width: 200px"></DatePicker></Col>
            </Row>
            <Row type="flex" justify="left" align="middle">
                <Col span="8"><span>ERP订单号：</span><Input v-model="ErpOrderNum" style="width: 70%"></Input></Col>
                <Col span="8"><span>供应商订单号：</span><Input v-model="supplierOrderNum" style="width: 70%"></Input></Col>
                <Col span="8"><span>供应商名称：</span><Input v-model="supplierName" style="width: 70%"ikjuol></Input></Col>
            </Row>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ErpOrderNum:"",
                supplierOrderNum:"",
                supplierName:'',
            }
        },
        components: {
            
        }
    }
</script>