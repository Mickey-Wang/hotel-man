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
        <Form ref="billValidate" :model="billValidate" :rules="ruleBillValidate" :label-width="80">
            <Row type="flex" justify="space-around" align="middle">
                <Col span="12">
                <span>账单日期：</span><DatePicker type="month" placeholder="账单年月" style="width: 200px"></DatePicker>
                <span>——</span>
                <DatePicker type="month" placeholder="账单年月" style="width: 200px"></DatePicker>
                </Col>
                <Col span="12"><span>ERP订单号：</span><Input v-model="billValidate.ErpOrderNum" style="width: 50%"></Input></Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
                <Col span="12"><span>导入日期：</span><DatePicker type="daterange" placeholder="导入日期" style="width: 200px"></DatePicker></Col>
                <Col span="12"><span>供应商订单号：</span><Input v-model="billValidate.supplierOrderNum" style="width: 50%"></Input></Col>
            </Row>
            <Row type="flex" justify="end" align="middle">
                <Col span="12"><span>供应商名称：</span><Input v-model="billValidate.supplierName" style="width: 50%"></Input></Col>
            </Row>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                billValidate: {
                    ErpOrderNum:"",
                    supplierOrderNum:"",
                    supplierName:'',
                },
                ruleBillValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            
        }
    }
</script>