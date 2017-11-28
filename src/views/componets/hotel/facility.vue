<template>
    <Form :model="hotelAddFacilityForm">
        <Collapse v-model="activeItem">
            <Panel name="1">
                服务项目
                <p slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem label="代客泊车：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="儿童看护：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="行李寄存：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="叫车服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="叫醒服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="商务服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="商务中心：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="专职门童：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="干洗：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="外送洗衣服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="洗衣服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="熨衣服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="擦鞋服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="婚宴服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="秘书服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="管家服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="礼宾服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="邮政服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="旅游票务服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="旅游票务专柜：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="翻译服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="多国語言工作人員：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="外币兑换服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="信用卡结算服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="一次性账单结算服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="儿童乐园：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="儿童俱乐部：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="传真/复印：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="鲜花店：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="送餐服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="水上运动：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="滑雪用具寄存：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="医务室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="专职行李员：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="会议厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="自行车租赁服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem label="租车服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="办理私人登记入住/退房手续：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem label="快速办理入住/退房手续：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="接机服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="0">收费</Radio>
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem label="接站服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="穿梭机场班车：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem label="接火车服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="接长途汽车服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem label="班车服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="前台服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">24小时大堂经理</Radio>
                                    <Radio label="1">部分时段大堂经理</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem label="接轮渡服务：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="大堂经理：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">24小时大堂经理</Radio>
                                    <Radio label="1">部分时段大堂经理</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="2">
                活动设施
                <p slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem label="SPA：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="健身室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="棋牌室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="温泉：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="足浴：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="游泳池：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">室内游泳池</Radio>
                                    <Radio label="1">室外游泳池</Radio>
                                    <br>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="台球：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="足球：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="篮球：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="高尔夫球场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="沙滩排球：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="滑雪：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="网球场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="模拟高尔夫球场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="乒乓球室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="保龄球场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="游戏室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="壁球室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="桌球室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="按摩室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="茶室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="桑拿浴室：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="徒步旅行：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="KTV：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="赌场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="夜总会：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="舞厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="私人海滩区：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="日光浴场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="浮潜：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="潜水：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="钓鱼：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="烧烤：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="图书馆：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="3">
                通用设施
                <p slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem label="餐厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="中餐厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="日式餐厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="西餐厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="残疾人客房：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="酒吧：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="前台贵重物品保险柜：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="商场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="暖气：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="自动取款机：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="公共区域无线上网：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费</Radio>
                                    <Radio label="1">收费</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="停车场：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">免费停车场</Radio>
                                    <Radio label="1">收费停车场</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="空调：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">中央空调</Radio>
                                    <Radio label="1">普通分体空调</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="理发美容中心：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="免费旅游交通图(可赠送)：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="多媒体演示系统：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="大堂免费报纸：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="非经营性客人休息区：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="电梯：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="多功能厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="礼品廊：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="大堂吧：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="专用展览厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="行政楼层：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="行政酒廊：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="公共音响系统：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="烧烤：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="咖啡厅：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="无烟楼层：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="吸烟区：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="所有公共及私人场所严禁吸烟：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="公共区域闭路电视监控系统：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="4">
                食品和饮品：
                <p slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem label="免费瓶装水：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="电热水壶：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="迷你吧：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="小冰箱：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="厨房：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="微波炉：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="洗碗机：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="5">
                通用设施：
                <p slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem label="暖气：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="空调：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="6">
                浴室：
                <p slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem label="免费洗漱用品：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">6样以上</Radio>
                                    <Radio label="1">6样以内</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="热水：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">24小时热水</Radio>
                                    <Radio label="1">非24小时热水</Radio>
                                    <Radio label="2">有</Radio>
                                    <Radio label="3">没有</Radio>
                                    <Radio label="4">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="电热水器：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="浴缸：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="按摩浴缸：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="独立淋浴间：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="共用卫生间：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="吹风机：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="拖鞋：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem label="浴衣：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="浴室化妆放大镜：" prop="park">
                                <RadioGroup v-model="hotelAddFacilityForm.park">
                                    <Radio label="0">有</Radio>
                                    <Radio label="1">没有</Radio>
                                    <Radio label="2">不确定</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
        </Collapse>
        <FormItem style="text-align: center; margin-top: 20px;">
            <Button type="primary" @click="handleSubmit">保存</Button>
            <Button type="ghost" @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    data() {
        return {
            hotelAddFacilityForm: {
                park: ''
            },
            activeItem: ['1', '2', '3', '4', '5', '6']
        }
    },
    methods: {
        // 提交表单
        handleSubmit () {

        },
        // 取消提交
        handleCancel () {
            this.$router.go(-1);
        }
    }
}
</script>