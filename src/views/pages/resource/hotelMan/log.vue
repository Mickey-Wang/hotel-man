<style scoped lang="less">
.log-container {
    h2 {
        text-align: center;
        margin: 10px 0;
    }
}
</style>
<template>
    <div class="log-container">
        <h2>日志</h2>
        <Table border :data="tableBody" :columns="tableHead"></Table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hotelId: '',
            tableHead: [{
                title: '原值',
                key: 'oldVal',
                align: 'center'
            }, {
                title: '新值',
                key: 'newVal',
                align: 'center'
            }, {
                title: '操作人',
                key: 'operator',
                align: 'center'
            }, {
                title: '操作时间',
                key: 'time',
                align: 'center'
            }, ],
            tableBody: [{
                oldVal: '1',
                newVal: '2',
                operator: '系统',
                time: '2017-8-10 10：15：11'
            }]
        }
    },
    mounted() {
        this.hotelId = this.$route.query.id;
        this.getLog();
    },
    methods: {
        // 查询日志
        getLog() {
            console.log('getLog');
            this.$http.get('')
                .then(res => {

                }).catch(error => {

                });
        }
    }
}
</script>