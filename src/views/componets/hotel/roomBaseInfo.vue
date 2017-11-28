<template>
    <Form :model="roomAddInfoForm" :label-width="100">
        <Row>
            <Col span="12">
                <FormItem label="物理房型名称：" prop="name">
                    <Input v-model="roomAddInfoForm.name"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="房型状态：" prop="state">
                    <Select v-model="roomAddInfoForm.state">
                        <Option value="0">有效</Option>
                        <Option value="1">无效</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="床型：" prop="bedType">
            <Input v-model="roomAddInfoForm.bedType" placeholder="床型名称，床型数量，床型规格"></Input>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="楼层：" prop="floor">
                    <Input v-model="roomAddInfoForm.floor"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="面积：" prop="acreage">
                    <Input v-model="roomAddInfoForm.acreage"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <FormItem label="标准入住人数：" prop="guestNum">
                    <Input v-model="roomAddInfoForm.guestNum"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="房型数量：" prop="bedTypeNum">
                    <Input v-model="roomAddInfoForm.bedTypeNum"></Input>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="是否可加床：" prop="park">
            <RadioGroup v-model="roomAddInfoForm.park">
                <Radio label="0">免费</Radio>
                <Radio label="1">收费</Radio>
                <Radio label="2">可以</Radio>
                <Radio label="3">不可以</Radio>
                <Radio label="4">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="是否有窗：" prop="park">
            <RadioGroup v-model="roomAddInfoForm.park">
                <Radio label="0">无窗</Radio>
                <Radio label="1">有窗</Radio>
                <Radio label="2">部分有窗</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="无烟信息：" prop="park">
            <RadioGroup v-model="roomAddInfoForm.park">
                <Radio label="0">无烟</Radio>
                <Radio label="1">不是无烟</Radio>
                <Radio label="2">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="所在楼层：" prop="park">
            <RadioGroup v-model="roomAddInfoForm.park">
                <Radio label="0">普通楼层</Radio>
                <Radio label="1">商务楼层</Radio>
                <Radio label="2">行政楼层</Radio>
                <Radio label="3">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="自助早餐：" prop="park">
            <RadioGroup v-model="roomAddInfoForm.park">
                <Radio label="0">有</Radio>
                <Radio label="1">没有</Radio>
                <Radio label="2">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="房型描述：" prop="roomType">
            <Input v-model="roomAddInfoForm.roomType" type="textarea" :autosize="{minRows: 2,maxRows: 5}" ></Input>
        </FormItem>
        <FormItem style="text-align: center;">
            <Button type="primary" @click="">保存</Button>
            <Button type="ghost" @click="" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                roomAddInfoForm: {
                    name: '',
                    state: '',
                    bedType: '',
                    floor: '',
                    acreage: '',
                    guestNum: '',
                    bedTypeNum: '',
                    park: '',
                    roomType: ''
                },
                roomAddFacilityForm: {
                    park: ''
                },
                activeItem: '1'
            }
        }
    }
</script>