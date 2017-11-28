<template>
  <div>
    <Form ref="hotelAddInfoForm" :model="hotelAddInfoForm" :rules="ruleValidate" :label-width="100">
        <Row v-if="!isHotelAdd">
            <Col span="12">
                <FormItem label="酒店上下线状态：" prop="ONOFF">
                    <Select v-model="hotelAddInfoForm.ONOFF">
                        <Option value="1">上线</Option>
                        <Option value="2">下线</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="酒店营业状态：" prop="operatingStatus">
                    <Select v-model="hotelAddInfoForm.operatingStatus">
                        <Option value="1">营业中</Option>
                        <Option value="2">暂停营业</Option>
                        <Option value="3">待开业</Option>
                        <Option value="4">装修</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <FormItem label="城市：" prop="city">
                    <Select v-model="hotelAddInfoForm.city">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="省份：" prop="province">
                    <Select v-model="hotelAddInfoForm.province">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="酒店名称：" prop="name">
            <Row>
                <Col span="12" style="padding-right: 20px;">
                    <Input v-model="hotelAddInfoForm.nameCN" placeholder="中文名称"></Input>
                </Col>
                <Col span="12">
                    <Input v-model="hotelAddInfoForm.nameEN" placeholder="英文名称"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="酒店别名：" prop="alias">
            <Input v-model="hotelAddInfoForm.alias" type="textarea" :autosize="{minRows: 2,maxRows: 4}"></Input>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="Citytag：" prop="cityTag">
                    <Select v-model="hotelAddInfoForm.cityTag">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <FormItem label="行政区：" prop="district">
                    <Select v-model="hotelAddInfoForm.district">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="酒店地址：" prop="address">
            <Input v-model="hotelAddInfoForm.address"></Input>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="短地址：" prop="addressLite">
                    <Input v-model="hotelAddInfoForm.addressLite"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="邮编：" prop="postcode">
                    <Input v-model="hotelAddInfoForm.postcode"></Input>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="腾讯坐标：" prop="coordinate">
            <Row>
                <Col span="11" style="padding-right: 20px;">
                    <Input v-model="hotelAddInfoForm.longitude" placeholder="经度"></Input>
                </Col>
                <Col span="11" style="padding-right: 20px;">
                    <Input v-model="hotelAddInfoForm.latitude" placeholder="纬度"></Input>
                </Col>
                <Col span="2">
                    <Button type="primary" @click="openMap">编辑</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="酒店星级：" prop="star">
            <RadioGroup v-model="hotelAddInfoForm.star">
                <Radio label="0">无星级</Radio>
                <Radio label="1">一星级</Radio>
                <Radio label="2">二星级</Radio>
                <Radio label="3">三星级</Radio>
                <Radio label="4">四星级</Radio>
                <Radio label="5">五星级</Radio>
                <Radio label="">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="酒店档次：" prop="level">
            <RadioGroup v-model="hotelAddInfoForm.level">
                <Radio label="0">经济</Radio>
                <Radio label="1">舒适</Radio>
                <Radio label="2">高档</Radio>
                <Radio label="3">豪华</Radio>
                <Radio label="">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="酒店品牌：" prop="brand">
                    <Select v-model="hotelAddInfoForm.brand">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="酒店集团：" prop="group">
                    <Select v-model="hotelAddInfoForm.group">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="房间数量：" prop="roomNum">
            <Row>
                <Col span="12">
                    <Input v-model="hotelAddInfoForm.roomNum"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="酒店主题：" prop="theme">
            <CheckboxGroup v-model="hotelAddInfoForm.theme">
                <Checkbox label="亲子酒店"></Checkbox>
                <Checkbox label="浪漫情侣"></Checkbox>
                <Checkbox label="休闲度假"></Checkbox>
                <Checkbox label="商务出行"></Checkbox>
                <Checkbox label="精品酒店"></Checkbox>
                <Checkbox label="美食林"></Checkbox>
                <Checkbox label="公寓"></Checkbox>
                <Checkbox label="客栈"></Checkbox>
                <Checkbox label="青年旅舍"></Checkbox>
                <Checkbox label="四合院"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="酒店电话：" prop="phone">
                    <Row>
                        <Col span="6" style="padding-right: 10px;">
                            <Input v-model="hotelAddInfoForm.areaCode" placeholder="区号"></Input>
                        </Col>
                        <Col span="18">
                            <Input v-model="hotelAddInfoForm.phone"></Input>
                        </Col>
                    </Row>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="传真：" prop="fax">
                    <Input v-model="hotelAddInfoForm.fax"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <FormItem label="酒店邮箱：" prop="email">
                    <Input v-model="hotelAddInfoForm.email"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="酒店网址：" prop="website">
                    <Input v-model="hotelAddInfoForm.website"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <FormItem label="开业时间：" prop="openTime">
                    <Input v-model="hotelAddInfoForm.openTime" placeholder="填写年份"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="最近装修时间：" prop="fitUpTime">
                    <Input v-model="hotelAddInfoForm.fitUpTime" placeholder="填写年份"></Input>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="酒店简介：" prop="intro">
            <Input v-model="hotelAddInfoForm.intro" type="textarea" :autosize="{minRows: 2,maxRows: 6}" placeholder="最多3000个字符"></Input>
        </FormItem>
        <FormItem label="酒店特色描述：" prop="feature">
            <Input v-model="hotelAddInfoForm.feature" type="textarea" :autosize="{minRows: 2,maxRows: 6}" placeholder="最多1500个字符"></Input>
        </FormItem>
        <FormItem label="信用卡：" prop="visa">
            <CheckboxGroup v-model="hotelAddInfoForm.visa">
                <Checkbox label="万事达(Master)"></Checkbox>
                <Checkbox label="威士(VISA)"></Checkbox>
                <Checkbox label="运通(AMEX)"></Checkbox>
                <Checkbox label="JCB  大来(Diners Club)"></Checkbox>
                <Checkbox label="银联卡  Discover"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="入住时间：" prop="checkInTime">
                    <Input v-model="hotelAddInfoForm.checkInTime"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="离店时间：" prop="checkOutTime">
                    <Input v-model="hotelAddInfoForm.checkOutTime"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <FormItem label="膳食安排：" prop="meals">
                    <Input v-model="hotelAddInfoForm.meals"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="儿童政策：" prop="childrenPolicy">
                    <Input v-model="hotelAddInfoForm.childrenPolicy"></Input>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="可携带宠物：" prop="pet">
            <RadioGroup v-model="hotelAddInfoForm.pet">
                <Radio label="0">可以</Radio>
                <Radio label="1">不可以</Radio>
                <Radio label="2">不确定</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="周边景点/环境：" prop="circum">
            <Input v-model="hotelAddInfoForm.circum" type="textarea" :autosize="{minRows: 2,maxRows: 4}"></Input>
        </FormItem>
        <FormItem label="温馨提示" prop="tip">
            <Input v-model="hotelAddInfoForm.tip" type="textarea" :autosize="{minRows: 2,maxRows: 3}"></Input>
        </FormItem>
        <Row>
            <Col span="12">
                <FormItem label="温馨提示时间：" prop="tipTime">
                    <Input v-model="hotelAddInfoForm.tipTime"></Input>
                </FormItem>
            </Col>
        </Row>
        <FormItem label="预订须知：" prop="notice">
            <Input v-model="hotelAddInfoForm.notice" type="textarea" :autosize="{minRows: 2,maxRows: 3}"></Input>
        </FormItem>
        <FormItem style="text-align: center;">
            <Button type="primary" @click="handleSubmit">保存</Button>
            <Button type="ghost" @click="handleCancel" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    <Modal
        title="Title"
        width='1300'
        v-model="mapState"
        :closable="true">
        <Row>
            <tMap></tMap>
        </Row>
    </Modal>
  </div>
</template>
<script>
  import tMap from './tMap';
  export default {
    props: {
      // 判断查看、新增酒店，true:新增酒店
      isHotelAdd: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        // 地图弹框状态：false:隐藏
        mapState: false,
        hotelAddInfoForm: {
            ONOFF: '',
            operatingStatus: '',
            city: '',
            province: '',
            nameCN: '',
            nameEN: '',
            alias: '',
            cityTag: '',
            district: '',
            address: '',
            addressLite: '',
            postcode: '',
            longitude: '',
            latitude: '',
            star: '',
            level: '',
            brand: '',
            group: '',
            roomNum: '',
            theme: [],
            phone: '',
            areaCode: '',
            fax: '',
            email: '',
            website: '',
            openTime: '',
            fitUpTime: '',
            intro: '',
            feature: '',
            visa: [],
            checkInTime: '',
            checkOutTime: '',
            meals: '',
            childrenPolicy: '',
            pet: '',
            circum: '',
            tip: '',
            tipTime: '',
            notice: ''
        },
        ruleValidate: {
            city: [
                {required: true }
            ],
            name: [
                {required: true }
            ],
            address: [
                {required: true }
            ],
            level: [
                {required: true }
            ]
        },
      }
    },
    components: {
      tMap
    },
    methods: {
      // 提交表单
      handleSubmit () {

      },
      // 取消提交
      handleCancel () {
          this.$router.go(-1);
      },
      openMap () {
          this.mapState = true;
      }
    }
  }
</script>