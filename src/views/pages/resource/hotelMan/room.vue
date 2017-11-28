<style scoped lang="less">
    @inputWidth: 150px;
    .container {
        h2 {
            margin: 10px 0;
        }
        .input-item {
            width: @inputWidth;
        }
        .page-box{
            text-align: right;
            margin: 10px 0;
        }
    }
</style>
<template>
    <div class="container">
        <h2>酒店ID:{{hotelId}} {{hotelName}}</h2>
        <Form class="form" :model="searchForm" inline :label-width="100">
            <FormItem label="物理房型ID：" prop="id">
                <Input class="input-item" v-model="searchForm.id"></Input>
            </FormItem>
            <FormItem label="物理房型名称：" prop="name">
                <Input class="input-item" v-model="searchForm.name"></Input>
            </FormItem>
            </FormItem>
            <FormItem label="房型状态：" prop="state">
                <Select  class="input-item" v-model="searchForm.state">
                    <Option value="0">有效</Option>
                    <Option value="1">无效</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="ghost" @click="searchHandle">查询</Button>
                <Button type="primary" @click="addRoomHandle" style="margin-left: 8px">新增</Button>
            </FormItem>
        </Form>
        <Table
            border
            stripe
            :data="tableBody" 
            :columns="tableHead" 
        ></Table>
        <div class="page-box">
            <Page
                show-total
                :total="tableBody.length" 
                :current="1" 
                @on-change=""
            ></Page>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                hotelId: '', // 酒店ID
                hotelName: '', // 酒店名称
                searchForm: {
                    id: '',
                    name: '',
                    state: ''
                },
                tableHead: [
                    {
                        align: 'center',
                        title: '物理房型ID',
                        key: 'id'
                    },
                    {
                        align: 'center',
                        title: '物理房型名称',
                        key: 'name'
                    },
                    {
                        align: 'center',
                        title: '面积',
                        key: 'acreage'
                    },
                    {
                        align: 'center',
                        title: '楼层',
                        key: 'floor'
                    },
                    {
                        align: 'center',
                        title: '床型名称',
                        key: 'bedType'
                    },
                    {
                        align: 'center',
                        title: '房型状态',
                        key: 'state'
                    },
                    {
                        align: 'center',
                        title: '操作',
                        key: 'edit',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({name: 'roomAdd', query: {id: this.hotelId, name: this.hotelName, type: 'edit'}});
                                        }
                                    }
                                }, '编辑'),
                            ]);
                        }
                    }
                ],
                tableBody: [
                    {
                        id: '1',
                        name: '大床房',
                        acreage: '20㎡',
                        floor: '8-10,24-25层',
                        bedType: '大床',
                        state: '有效'
                    }
                ]
            }
        },
        mounted () {
            this.hotelId = this.$route.query.id;
            this.hotelName = this.$route.query.name;
        },
        methods: {
            // 新增房间
            addRoomHandle () {
                this.$router.push({name: 'roomAdd', query: {id: this.hotelId, name: this.hotelName, type: 'new'}});
            },
            // 搜索
            searchHandle() {
                var data = {
                    id: '1',
                    name: '大床房',
                    acreage: '20㎡',
                    floor: '8-10,24-25层',
                    bedType: '大床',
                    state: '有效'
                };
                // this.$http.get('')
                //     .then(res => {

                //     }).catch(error => {

                //     });
                this.tableBody.push(data);
            },
        }
    }
</script>