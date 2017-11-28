<style scoped lang="less">
    .mapping-container {
        .button-box {
            margin: 10px 0;
        }
        .page-box{
            text-align: right;
            margin: 10px 0;
        }
    }
</style>
<template>
    <div class="mapping-container">
        <h2>酒店ID:{{hotelId}} {{hotelName}}</h2>
        <Button :disabled="selectList.length === 0"  class="button-box" type="primary">设为待审</Button>
        <Table 
            highlight-row 
            border 
            :columns="tableHead" 
            :data="tableBody" 
            @on-selection-change="selectChange"
        ></Table>
        <div class="page-box">
            <Page 
                show-total
                :total="tableBody.length" 
                :current="1" 
                @on-change="changePage"
            ></Page>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hotelId: '', // 酒店ID
            hotelName: '', // 酒店名称
            tableHead: [
                {
                    type: 'selection',
                    align: 'center',
                    width: '55px',
                    title: '',
                    key: 'id'
                },
                {
                    align: 'center',
                    width: '90px',
                    title: '酒店名称',
                    key: 'name'
                },
                {
                    align: 'center',
                    width: '150px',
                    title: '酒店地址',
                    key: 'address'
                },
                {
                    align: 'center',
                    width: '120px',
                    title: '酒店电话',
                    key: 'phone'
                },
                {
                    align: 'center',
                    title: '经纬度距离',
                    key: 'geo'
                },
                {
                    align: 'center',
                    width: '100px',
                    title: '酒店链接',
                    key: 'url',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ name: 'hotelAdd' });
                                    }
                                }
                            }, '打开连接'),
                        ]);
                    }
                },
                {
                    align: 'center',
                    title: '城市',
                    key: 'city'
                },
                {
                    align: 'center',
                    title: '供应商',
                    key: 'provider'
                },
                {
                    align: 'center',
                    width: '90px',
                    title: '供应商酒店ID',
                    key: 'providerId'
                },
                {
                    align: 'center',
                    width: '90px',
                    title: '聚合状态',
                    key: 'state'
                },
                {
                    align: 'center',
                    title: '操作人',
                    key: 'operator'
                },
                {
                    align: 'center',
                    width: '160px',
                    title: '更新时间',
                    key: 'updateTime'
                }
            ],
            tableBody: [
                {
                    name: '和颐酒店',
                    address: '北京海淀区永定路4号院',
                    phone: '010-88257117',
                    geo: '50m',
                    url: 'http://baidu.com',
                    city: '北京',
                    provider: '携程',
                    providerId: '2116742',
                    state: '已聚已审',
                    operator: '系统',
                    updateTime: '2017-8-10 10：15：11'
                },
                {
                    name: '和颐酒店',
                    address: '北京海淀区永定路4号院',
                    phone: '010-88257117',
                    geo: '50m',
                    url: 'http://baidu.com',
                    city: '北京',
                    provider: '携程',
                    providerId: '2116742',
                    state: '已聚已审',
                    operator: '系统',
                    updateTime: '2017-8-10 10：15：11'
                }
            ],
            selectList: [], // 选中酒店列表
            currentPage: 1 // 当前页码
        }
    },
    mounted () {
        this.hotelId = this.$route.query.id;
        this.hotelName = this.$route.query.name;
    },
    methods: {
        // 点击翻页
        changePage (n) {
            this.currentPage = n;
        },
        // 点击复选框
        selectChange (selection) {
            this.selectList = selection;
            console.log('change', selection)
        }
    }
}
</script>