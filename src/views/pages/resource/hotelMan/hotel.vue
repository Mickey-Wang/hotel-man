<style scoped lang="less">
@inputWidth: 150px;
.form-container {
    .input-item {
        width: @inputWidth;
    }
    .button-box {
        text-align: center;
        margin-top: 25px;
    }
    .page-box {
        margin-top: 10px;
        text-align: right;
    }
}
</style>
<template>
    <div class="form-container">
        <Form :model="hotelForm" inline :label-width="100">
            <Row>
                <Col span="16">
                <Row>
                    <Col span="8">
                    <FormItem label="酒店ID：">
                        <Input class="input-item" v-model="hotelForm.id"></Input>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="酒店名称：">
                        <Input v-model="hotelForm.name" class="input-item"></Input>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="酒店上下线：">
                        <Select v-model="hotelForm.line" class="input-item">
                            <Option value="online">上线</Option>
                            <Option value="offline">下线</Option>
                        </Select>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                    <FormItem label="省份：">
                        <Select v-model="hotelForm.province" class="input-item">
                            <Option value="bj">北京</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="城市：">
                        <Select v-model="hotelForm.city" class="input-item">
                            <Option value="bj">比较</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="酒店档次：">
                        <Select v-model="hotelForm.level" class="input-item">
                            <Option value="0">全部</Option>
                            <Option value="1">经济</Option>
                            <Option value="2">舒适</Option>
                            <Option value="3">高档</Option>
                            <Option value="4">豪华</Option>
                        </Select>
                    </FormItem>
                    </Col>
                </Row>
                </Col>
                <Col span="4" class="button-box">
                <Button type="primary" @click="searchHandle">查询</Button>
                </Col>
                <Col span="4" class="button-box">
                <Button type="primary" @click="hotelAdd">新增酒店</Button>
                </Col>
            </Row>
        </Form>
        <Table highlight-row border :columns="tableHead" :data="tableBody"></Table>
        <Row>
            <Col span="24" class="page-box">
            <Page 
                :total="tableBody.length" 
                show-total 
                :page-size="10"
            ></Page>
            </Col>
        </Row>
        <Modal
            title="Title"
            width='1300'
            v-model="modalState"
            :styles="{'top': '20px'}"
            :closable="true">
            <Row>
                <HotelAdd></HotelAdd>
            </Row>
        </Modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modalState: false, // 显示新增酒店弹框
            hotelForm: {
                id: '',
                name: '',
                line: '',
                province: '',
                city: '',
                level: ''
            },
            tableHead: [
                {
                    align: 'center',
                    title: '酒店ID',
                    key: 'id'
                },
                {
                    align: 'center',
                    width: '180px',
                    title: '酒店名称',
                    key: 'name'
                },
                {
                    align: 'center',
                    width: '240px',
                    title: '酒店地址',
                    key: 'address'
                },
                {
                    align: 'center',
                    title: '城市',
                    key: 'city'
                },
                {
                    align: 'center',
                    width: '130px',
                    title: '酒店电话',
                    key: 'phone'
                },
                {
                    align: 'center',
                    title: '酒店状态',
                    key: 'state'
                },
                {
                    align: 'center',
                    title: '操作',
                    key: 'operator',
                    width: 320,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ name: 'hotelAdd', query: { id: params.row.id, name: params.row.name } });
                                    }
                                }
                            }, '酒店信息'),
                            h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ name: 'hotelMapping' ,query: {id: params.row.id, name: params.row.name}});
                                    }
                                }
                            }, '酒店mapping'),
                            h('Button', {
                                props: {
                                    type: 'warning',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ name: 'roomList' ,query: {id: params.row.id, name: params.row.name}});
                                    }
                                }
                            }, '房型列表'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({ name: 'hotelLog', query: { id: params.row.id } });
                                    }
                                }
                            }, '日志')
                        ]);
                    }
                }
            ],
            tableBody: [
                {
                    id: '1503536',
                    name: '桔子水晶酒店（安贞店）',
                    address: '北京朝阳区建国门外永安里中街25号',
                    city: '北京市',
                    phone: '0539-5080666',
                    state: '上线'
                }
            ]
        }
    },
    methods: {
        // 搜索
        searchHandle() {
            var data = {
                id: '1503536',
                name: '桔子水晶酒店（安贞店）',
                address: '北京朝阳区建国门外永安里中街25号',
                city: '北京市',
                phone: '0539-5080666',
                state: '上线'
            };
            this.tableBody.push(data);
            // this.$http.get('')
            //     .then(res => {

            //     }).catch(error => {

            //     });
        },
        // 新增酒店
        hotelAdd() {
            // this.modalState = true;
            this.$router.push({ name: 'hotelAdd' });
        }
    }
}
</script>