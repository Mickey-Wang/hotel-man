<template>
    <Form :model="roomAddFacilityForm" >
        <Collapse v-model="activeItem">
            <Panel name="1">
                便利设施：
                <p slot="content">
                    <Row>
                        <Col span="8">
                        <FormItem label="壁炉：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="电风扇：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="电热毯：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="电子秤：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="房内保险箱：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="开夜床：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="闹钟：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="坐卧两用长沙发：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="沙发：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="书桌：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="特长睡床(超过两米)：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="蚊帐：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="洗衣机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="衣柜/衣橱：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="雨伞：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="熨衣设备：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="遮光窗帘：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="针线包：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="窗帘：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">自动窗帘</Radio>
                                <Radio label="1">手动窗帘</Radio>
                                <Radio label="1">有</Radio>
                                <Radio label="2">没有</Radio>
                                <Radio label="3">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col offset="1" span="13">
                        <FormItem label="房间内高速上网：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">免费</Radio>
                                <Radio label="1">收费</Radio>
                                <Radio label="2">部分收费</Radio>
                                <Radio label="3">部分提供并收费</Radio>
                                <Radio label="4">部分提供并免费</Radio>
                                <Radio label="5">部分提供并有部分收费</Radio>
                                <Radio label="6">有</Radio>
                                <Radio label="7">没有</Radio>
                                <Radio label="8">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="备用床具：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">鸭绒被</Radio>
                                <Radio label="1">毯子或被子</Radio>
                                <Radio label="1">有</Radio>
                                <Radio label="2">没有</Radio>
                                <Radio label="3">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col offset="1" span="13">
                        <FormItem label="有线宽带：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">免费</Radio>
                                <Radio label="1">收费</Radio>
                                <Radio label="3">有</Radio>
                                <Radio label="4">没有</Radio>
                                <Radio label="5">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="插座：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">多种规格电源插座</Radio>
                                <Radio label="1">单一规格电源插座</Radio>
                                <Radio label="2">110V电压插座</Radio>
                                <Radio label="3">220V电压插座</Radio>
                                <Radio label="4">有</Radio>
                                <Radio label="5">没有</Radio>
                                <Radio label="6">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col offset="1" span="13">
                        <FormItem label="客房WIFI：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">免费</Radio>
                                <Radio label="1">收费</Radio>
                                <Radio label="2">部分收费</Radio>
                                <Radio label="3">部分提供并收费</Radio>
                                <Radio label="4">部分提供并免费</Radio>
                                <Radio label="5">部分提供并有部分收费</Radio>
                                <Radio label="6">有</Radio>
                                <Radio label="7">没有</Radio>
                                <Radio label="8">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="2">
                服务及其他：
                <p slot="content">
                    <Row>
                        <Col span="8">
                        <FormItem label="更衣室：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="语音留言：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="欢迎礼品：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="唤醒服务：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="空气检测器：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="空气净化器：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="连通房：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="免费报纸：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="私人入口：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="私人温泉：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="私人游泳池：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
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
                媒体/科技：
                <p slot="content">
                    <Row>
                        <Col span="8">
                        <FormItem label="CD播放机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="DVD播放机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="iPad：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="iPod音乐基座：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="按次点播收费电视：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="传真：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="电脑：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="录像机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="收费电影：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="收音机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="卫星频道：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="音响：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="游戏机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="有线频道：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="智能门锁：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="9">
                        <FormItem label="电视机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">液晶电视机</Radio>
                                <Radio label="1">3D电视</Radio>
                                <Radio label="2">有</Radio>
                                <Radio label="3">没有</Radio>
                                <Radio label="4">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="15">
                        <FormItem label="电话：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">国内长途电话</Radio>
                                <Radio label="1">国际长途电话</Radio>
                                <Radio label="2">免费国内长途电话</Radio>
                                <Radio label="3">有</Radio>
                                <Radio label="4">没有</Radio>
                                <Radio label="5">不确定</Radio>
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
                        <FormItem label="抽油烟机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="厨房：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="厨房用具：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="电热水壶：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="咖啡壶/茶壶：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="咖啡机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="烤面包机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="烤箱：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="炉灶：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="迷你吧：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="免费瓶装水：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="速食品：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="调味品：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="微波炉：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="洗碗机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
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
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="用餐区：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
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
                室外/景观：
                <p slot="content">
                    <Row>
                        <Col span="8">
                        <FormItem label="城景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="地标景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="海景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="河景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="湖景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="花园景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="露台：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="山景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="享有风景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="阳台：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="游泳池景：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
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
                通用设施：
                <p slot="content">
                    <Row>
                        <Col span="8">
                        <FormItem label="空调：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">中央空调</Radio>
                                <Radio label="1">普通分体空调</Radio>
                                <Radio label="2">有</Radio>
                                <Radio label="3">没有</Radio>
                                <Radio label="4">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="暖气：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="行政酒廊：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
            <Panel name="7">
                浴室：
                <p slot="content">
                    <Row>
                        <Col span="8">
                        <FormItem label="按摩浴缸：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="吹风机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="电热水器：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="独立淋浴间：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="公用吹风机：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="共用卫生间：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="共用浴室：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="淋浴：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="桑拿：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                        <FormItem label="拖鞋：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="洗浴间电话：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="洗浴间电视：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
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
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="浴室：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="浴室化妆放大镜：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
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
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="智能马桶：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">有</Radio>
                                <Radio label="1">没有</Radio>
                                <Radio label="2">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="热水：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">24小时热水</Radio>
                                <Radio label="1">非24小时热</Radio>
                                <Radio label="2">有</Radio>
                                <Radio label="3">没有</Radio>
                                <Radio label="4">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="10">
                        <FormItem label="免费洗漱用品：" prop="park">
                            <RadioGroup v-model="roomAddFacilityForm.park">
                                <Radio label="0">6样以上</Radio>
                                <Radio label="1">6样以内</Radio>
                                <Radio label="2">有</Radio>
                                <Radio label="3">没有</Radio>
                                <Radio label="4">不确定</Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                </p>
            </Panel>
        </Collapse>
        <FormItem style="text-align: center; margin-top: 20px;">
            <Button type="primary" @click="">保存</Button>
            <Button type="ghost" @click="" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    data() {
        return {
            roomAddFacilityForm: {
                park: ''
            },
            activeItem: ['1', '2', '3', '4', '5', '6', '7']
        }
    }
}
</script>