<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">城市审核列表</div>
            <div class="button">
                <Button type="primary" @click="toSubmit1">提交</Button>
                <Button type="primary" @click="toSubmit2" v-if="tableType!=1">设为待审</Button>
                <Button type="primary">新增</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table table1">
                <div class="wrap wrapW1">
                    <div ref="w1">
                        <table :style="{'min-width':divWidth1+'px'}">
                            <tr>
                                <th><input type="checkbox" v-if="tableType!==1" v-model="checkAll" @click="toggleCheckAll" :disabled="disableStatus1"></th>
                                <th v-for="(item,index) in cityHeaderData">{{item.title}}</th>
                            </tr>
                            <tr class="fontColor" v-if="tableType!=1" v-for="(item,index) in JDHotelApproval">
                                <td></td>
                                <td @click="getInputValue(item)">{{item.hotelName}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.distance}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{item.hotelId}}</td>
                                <td>{{item.mapStatus}}</td>
                                <td>{{item.lastOperator}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <td>{{item.log}}</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table v-if="cityApprovalList.length>0" :style="{'min-width':divWidth1+'px'}">
                            <tr v-for="(item,index) in cityApprovalList" :key="item.id" :class="[{trClass: item.mapStatus=='已聚待审'}]">
                                <td><input v-if="item.mapStatus!=''" type="checkbox" v-model="item.checked" @change="oneSelect(item)" :disabled="item.mapStatus=='已聚待审'?disableStatus1:disableStatus2"></td>
                                <td @click="getInputValue(item)">{{item.hotelName}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.distance}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{item.hotelId}}</td>
                                <td>{{item.mapStatus}}</td>
                                <td>{{item.lastOperator}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <td @click="checkShow = true">{{item.log}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="cityApprovalList.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottomTable">
            <div class="title">相似城市列表</div>
            <div class="button">
                <span>城市名称</span>
                <Input v-model="cityValue" placeholder="JD数据模糊比配" style="width: 200px"></Input>
                <Button type="primary" @click="getSimilar">Go</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table table2">
                <div class="wrap wrapW2">
                    <div ref="w2">
                        <table :style="{'min-width':divWidth2+'px'}">
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in similarHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="h3">
                        <table ref="h4" v-if="similarCityData.length>0" :style="{'min-width':divWidth2+'px'}">
                            <tr v-for="(item,index) in similarCityData" :key="item.id">
                                <td><input type="radio" v-model="similar" :value="index" @change="radioSelect(item)"></td>
                                <td>{{item.id}}</td>
                                <td v-html="highlight(item.hotelName, cityValue)"></td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <td @click="treeShow = true">{{item.tree}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="similarCityData==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal
                v-model="checkShow"
                title="查看日志"
                width="800">
            <div>
                <Table border height="360" :columns="checkTitle" :data="checkData"></Table>
            </div>
            <div slot="footer">
                <Button v-if="false"></Button>
            </div>
        </Modal>
        <Modal
                v-model="treeShow"
                title="查看酒店Tree信息"
                width="1300">
            <Button type="primary" @click="treeSubmit">设为待审</Button>
            <div class="table table1" style="height: 300px; margin-top: 10px;">
                <div class="wrap wrapW1" style="min-width: 100%">
                    <div ref="w3">
                        <table style="width: 1266px;">
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in treeTitle">{{item.title}}</th>
                            </tr>
                            <tr class="fontColor">
                                <td></td>
                                <td>{{treeData[0].hotelName}}</td>
                                <td>{{treeData[0].address}}</td>
                                <td>{{treeData[0].tel}}</td>
                                <td>{{treeData[0].distance}}</td>
                                <td>{{treeData[0].link}}</td>
                                <td>{{treeData[0].cityName}}</td>
                                <td>{{treeData[0].supplierName}}</td>
                                <td>{{treeData[0].hotelId}}</td>
                                <td>{{treeData[0].lastModifyTime}}</td>
                                <td>{{treeData[0].mapStatus}}</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table style="width: 1266px;">
                            <tr v-for="(item,index) in treeData" v-if="index>0" :key="item.id">
                                <td><input type="checkbox" v-model="item.checked"/></td>
                                <td>{{item.hotelName}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.distance}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{item.hotelId}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <td>{{item.mapStatus}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="treeData.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <Button v-if="false"></Button>
            </div>
        </Modal>
        <Modal v-model="modelShow" width="500" :closable="false">
            <p style="font-size: 16px">{{message}}</p>
        </Modal>
    </section>
</template>
<script>
    export default {
        data(){
            return {
                // 单选
                similar: '',
                // 相似搜索框的关键字
                cityValue: '',
                // 未聚待审的背景色
                classShow: false,
                cityHeaderData: [
                    {
                        title: '酒店名称',
                        key: 'hotelName'
                    },
                    {
                        title: '酒店地址',
                        key: 'address'
                    },
                    {
                        title: '酒店电话',
                        key: 'tel'
                    },
                    {
                        title: '经纬度距离',
                        key: 'distance'
                    },
                    {
                        title: '酒店链接',
                        key: 'link'
                    },
                    {
                        title: '城市',
                        key: 'cityName'
                    },
                    {
                        title: '供应商',
                        key: 'supplierName'
                    },
                    {
                        title: '供应商酒店ID',
                        key: 'hotelId'
                    },
                    {
                        title: '聚合状态',
                        key: 'mapStatus'
                    },
                    {
                        title: '操作人',
                        key: 'lastOperator'
                    },
                    {
                        title: '更新时间',
                        key: 'lastModifyTime'
                    },
                    {
                        title: '日志',
                        key: 'log'
                    }
                ],
                JDHotelApproval:[
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'JD',
                        hotelId:'001',
                        mapStatus:'',
                        lastOperator:'系统',
                        lastModifyTime:'',
                        log:''
                    }
                ],
                cityApprovalList: [
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        mapStatus:'已聚待审',
                        lastOperator:'系统',
                        lastModifyTime:'2017-8-10 10:15:11',
                        log:'查看'
                    },
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'30m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        mapStatus:'已聚待审',
                        lastOperator:'系统',
                        lastModifyTime:'2017-8-10 10:15:11',
                        log:'查看'
                    },
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'30m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        mapStatus:'已聚已审',
                        lastOperator:'系统',
                        lastModifyTime:'2017-8-10 10:15:11',
                        log:'查看'
                    },
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'30m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        mapStatus:'已聚已审',
                        lastOperator:'系统',
                        lastModifyTime:'2017-8-10 10:15:11',
                        log:'查看'
                    },
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'30m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        mapStatus:'已聚已审',
                        lastOperator:'系统',
                        lastModifyTime:'2017-8-10 10:15:11',
                        log:'查看'
                    },
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'30m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        mapStatus:'已聚已审',
                        lastOperator:'系统',
                        lastModifyTime:'2017-8-10 10:15:11',
                        log:'查看'
                    }
                ],
                similarHeaderData: [
                    {
                        title: '城市ID',
                        key: 'id'
                    },
                    {
                        title: '酒店名称',
                        key: 'hotelName'
                    },
                    {
                        title: '酒店地址',
                        key: 'address'
                    },
                    {
                        title: '酒店电话',
                        key: 'tel'
                    },
                    {
                        title: '酒店链接',
                        key: 'link'
                    },
                    {
                        title: '城市',
                        key: 'cityName'
                    },
                    {
                        title: '查看酒店Tree',
                        key: 'tree'
                    },
                ],
                similarCityData: [
                    {
                        id: '364469',
                        hotelName: '北京五棵松和颐酒店',
                        address:'北京市朝阳区新源西里东街6号楼',
                        tel:'010-64666626',
                        link:'打开链接',
                        cityName:'北京',
                        tree:'Tree信息'
                    },
                    {
                        id: '364469',
                        hotelName: '北京燕莎和颐酒店',
                        address:'北京市朝阳区新源西里东街6号楼',
                        tel:'010-64666626',
                        link:'打开链接',
                        cityName:'北京',
                        tree:'Tree信息'
                    },
                    {
                        id: '364469',
                        hotelName: '北京燕莎和颐酒店',
                        address:'北京市朝阳区新源西里东街6号楼',
                        tel:'010-64666626',
                        link:'打开链接',
                        cityName:'北京',
                        tree:'Tree信息'
                    },
                ],
                // 点击查看表格的数据
                checkTitle:[
                    {
                        title: '原值',
                        key: 'oldValue'
                    },
                    {
                        title: '新值',
                        key: 'newValue'
                    },
                    {
                        title: '操作时间',
                        key: 'lastModifyTime'
                    },
                    {
                        title: '操作人',
                        key: 'lastOperator'
                    }
                ],
                checkData:[
                    {
                        'oldValue':'已聚待审',
                        'newValue':'已聚已审',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'oldValue':'已聚待审',
                        'newValue':'已聚已审',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'oldValue':'已聚待审',
                        'newValue':'已聚已审',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'oldValue':'已聚待审',
                        'newValue':'已聚已审',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    }
                ],
                // 酒店Tree表格的数据
                treeTitle:[
                    {
                        title: '酒店名称',
                        key: 'hotelName'
                    },
                    {
                        title: '酒店地址',
                        key: 'address'
                    },
                    {
                        title: '酒店电话',
                        key: 'tel'
                    },
                    {
                        title: '经纬度距离',
                        key: 'distance'
                    },
                    {
                        title: '酒店链接',
                        key: 'link'
                    },
                    {
                        title: '城市',
                        key: 'cityName'
                    },
                    {
                        title: '供应商',
                        key: 'supplierName'
                    },
                    {
                        title: '供应商酒店ID',
                        key: 'hotelId'
                    },
                    {
                        title: '审核时间',
                        key: 'lastModifyTime'
                    },
                    {
                        title: '聚合状态',
                        key: 'mapStatus'
                    },
                ],
                treeData:[
                    {
                        hotelName: '北京五棵松和颐酒店',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'JD',
                        hotelId:'001',
                        lastModifyTime:'',
                        mapStatus:'',
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    },
                    {
                        hotelName: '北京五棵松',
                        address: '北京海淀区永定路4号院',
                        tel:'010-88257117',
                        distance:'50m',
                        link:'打开链接',
                        cityName:'北京',
                        supplierName:'携程',
                        hotelId:'001',
                        lastModifyTime:'2017-8-10 10:15:11',
                        mapStatus:'已聚已审'
                    }
                ],
                // 全选状态
                checkAll: false,
                // 点击全选时，只有未聚待审可以选中
                // 控制未聚待审的disable的状态
                disableStatus1: false,
                // 控制非未聚待审的disable的状态
                disableStatus2: false,
                // 点击提交给接口的入参
                submitData: {
                    checkBoxData:[],
                    radioData:[]
                },
                // 点击设为待审的入参
                submitData1:{
                    checkBoxData:[],
                    radioData:[]
                },
                // 点击tree上面的提交待审的数据
                submitTreeData:[],
                // 控制模态框显示
                modelShow:false,
                // 控制查看模态框显示
                checkShow:false,
                // 控制查看Tree信息
                treeShow:false,
                // 模态框信息
                message:'',
                // div的宽度
                divWidth1:'',
                divWidth2:'',
                divWidth3:'',
                // 确定表格哪一种(已聚待审、已聚已审、未聚待审)
                // 这个可以从 getter 里面拿到判断值
                // 假设0为已聚待审、已聚已审,1未聚待审
                tableType:0,
            }
        },
        created(){
            // cityApprovalList数据中set数据 checked: false
            this.cityApprovalList.forEach((item,index)=>{
                this.$set(item,'checked',false);
            });
            this.treeData.forEach((item,index)=>{
                this.$set(item,'checked',false);
            });
        },
        mounted(){
            // 计算一下初始化第一个表格的宽度
            this.divWidth1 = this.$refs.w1.offsetWidth;
            this.divWidth2 = this.$refs.w2.offsetWidth;
            this.divWidth3 = this.$refs.w3.offsetWidth;
            console.log('宽度:', this.divWidth3);
        },
        watch: {
            cityApprovalList: {
                handler () {
                    let check = true;
                    // 先确定是否有已聚待审的数据的存在
                    if(this.tableType==0){
                        for (let i = 0; i < this.cityApprovalList.length; i++) {
                            let item = this.cityApprovalList[i];
                            if (item.mapStatus === '已聚待审') {
                                console.log('item', item.checked);
                                if (!item.checked) {
                                    check = false;
                                    this.disableStatus2 = false;
                                    break;
                                }
                            }else {
                                if(!item.checked){
                                    this.disableStatus1 = false;
                                }
                            }
                        }
                        this.checkAll = check;
                    }

                    console.log('change checkAll', this.checkAll);
                },
                deep: true
            }
        },
        methods:{
            toggleCheckAll () {
                // 等model变化完再执行事件
                this.$nextTick(() => {
                    for (let i = 0; i < this.cityApprovalList.length; i++) {
                        let item = this.cityApprovalList[i];
                        if(this.tableType==0){
                            if (item.mapStatus === '已聚待审') {
                                item.checked = this.checkAll;
                            }else {
                                // 如果不是已聚待审，则不能进行选择操作
                                this.disableStatus2 = true;
                            }
                        }
                    }
                    if(!this.checkAll){
                        this.disableStatus2 = false;
                    }
                })
            },
            // 点击城市名称赋值到input，然后调取接口
            getInputValue(item){
                console.log('点击获取名字:',item.hotelName);
                this.cityValue = item.hotelName;
            },
            // highlight函数
            highlight(value,word){
                let newIndex = value.indexOf(word);
                let beforeStr = value.substring(0, newIndex);
                let afterStr = value.substring(newIndex + word.length);
                //console.log('word', word, 'before', beforeStr, ', after', afterStr, newIndex);
                if (newIndex == -1 || afterStr === value) {
                    return value;
                } else {
                    //console.log('word', word, 'before', beforeStr, ', after', afterStr, newIndex);
                    return beforeStr + '<span style="color: #2d8cf0;">' + word + '</span>' + this.highlight(afterStr, word);
                }
            },
            // 点击提交按钮(点击提交按钮)
            toSubmit1(){
                this.submitData.checkBoxData = [];
                if(this.tableType == 0){
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        if(this.cityApprovalList[i].mapStatus=='已聚待审'&&this.cityApprovalList[i].checked){
                            console.log('checked的ID:',this.tableType,this.cityApprovalList[i].id);
                            this.submitData.checkBoxData.push(this.cityApprovalList[i]);
                        }
                    }
                    console.log('已聚待审设为已审的数据:',this.submitData);
                    // 获取酒店审核列表中选中的城市ID
                    if(this.submitData.checkBoxData.length==0){
                        this.instance('info','已聚待审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市提交？';
                        // 点击确定调取接口
                        this.ok(0);
                    }
                }
                if(this.tableType == 1){
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        if(this.cityApprovalList[i].mapStatus=='未聚待审'&&this.cityApprovalList[i].checked){
                            console.log('checked的ID:',this.tableType,this.cityApprovalList[i].id);
                            this.submitData.checkBoxData.push(this.cityApprovalList[i]);
                        }
                    }
                    console.log('未聚未审设为已审的数据:',this.submitData);
                    if(this.submitData.checkBoxData.length!=0 && this.submitData.radioData.length!=0){
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市提交？';
                        // 点击确定调取接口
                        this.ok(1);
                    }else {
                        this.instance('info','未聚待审');
                    }
                }
            },
            toSubmit2(){
                // 当是已聚待审的时候
                this.submitData1.checkBoxData = [];
                if(this.tableType==0){
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        if(this.cityApprovalList[i].mapStatus == '已聚已审'&&this.cityApprovalList[i].checked){
                            this.submitData1.checkBoxData.push(this.cityApprovalList[i]);
                        }
                    }
                    console.log('已聚已审的数据:',this.submitData1.checkBoxData,this.submitData1);
                    if(this.submitData1.checkBoxData.length == 0){
                        this.instance('info','已聚已审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市设为待审？';
                        // 点击确定调取接口
                        this.ok(2);
                    }
                }
                console.log('设为已审的数据:',this.submitData1);
            },
            // tree表格上面的按钮
            treeSubmit(){
                this.submitTreeData = [];
                for(let i=0; i<this.treeData.length; i++){
                    if(this.treeData[i].mapStatus == '已聚已审'&&this.treeData[i].checked){
                        this.submitTreeData.push(this.treeData[i]);
                    }
                }
                console.log('选择的Tree信息:',this.submitTreeData);
                if(this.submitTreeData.length == 0){
                    this.instance('info','已聚已审');
                }else {
                    this.modelShow = true;
                    this.message = '请确认是否将已选择城市设为待审？';
                    // 点击确定调取接口
                    this.ok(3);
                }
            },
            // 单选框对应的值
            radioSelect(item){
                console.log('radio',item);
                this.submitData.radioData = [];
                this.submitData1.radioData = [];
                this.submitData.radioData.push(item);
                this.submitData1.radioData.push(item);
            },
            // 单个复选框选择的时候
            oneSelect(item){
                for (let i=0; i<this.cityApprovalList.length; i++){
                    if(this.cityApprovalList[i].mapStatus!=='已聚待审'){
                        if(this.cityApprovalList[i].checked){
                            this.disableStatus1 = true;
                        }
                    }else {
                        if(this.cityApprovalList[i].checked){
                            this.disableStatus2 = true;
                        }else {
                            this.disableStatus1 = false;
                        }
                    }
                }
            },
            // 弹框选择确定按钮
            ok (item) {
                console.log('点击确定',item);

            },
            // 弹框选择取消按钮
            cancel () {
                console.log('点击取消');
            },
            instance (type,status) {
                const content1 = '<p style="font-size: 16px;">请必须选择一个京东城市和至少一个(含)供应商城市"'+status+'"的数据</p>';
                const content2 = '<p style="font-size: 16px;">请输入城市名称</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            content: content1
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            content: content2
                        });
                        break;
                }
            },
            // 点击Go，获取京东相似数据
            getSimilar(){
                if(this.cityValue==''){
                    this.instance('warning');
                }else {

                }
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    /* 表格初始化 */
    table{
        width:100%;
        text-align:center;
        border-collapse:collapse;
        border-spacing:0;
        border-bottom:1px solid #e9eaec;
    }
    table td, table th{
        border-left:1px solid #e9eaec;
        border-top:1px solid #e9eaec;
        height: 34px;
    }
    table tr td:nth-of-type(1),table tr th:nth-of-type(1){
        border-left: none;
        width: 60px;
    }
    .wrapW1 table tr td:nth-of-type(2){
        cursor: pointer;
    }
    .wrapW1 table tr td:nth-last-of-type(1){
        cursor: pointer;
    }
    .wrapW2 table tr td:nth-last-of-type(1){
        cursor: pointer;
    }
    /* 表格横向滚动条和纵向滚动条 */
    .table{
        min-width: 100%;
        position: relative;
        border: 1px solid #dddee1;
        border-top: none;
        overflow-x: auto;
        .wrapW1{
            min-width: 200%;
        }
        .wrapW2{
            width: 100%;
        }
        .wrap{
            width: inherit;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            div:nth-of-type(1){
                overflow: hidden;
                box-sizing: border-box;
                table{
                    table-layout: fixed;
                    th{
                        background: #f8f8f9;
                    }
                }
            }
            div:nth-of-type(2){
                height: 74%;
                overflow: auto;
                table{
                    table-layout: fixed;
                    tr:nth-of-type(1) td{
                        border-top: none;
                    }
                }
            }
        }
    }
    .table1{
        height: 85%;
    }
    .table2{
        height: 60%;
    }
    .fontColor{
        color: #2d8cf0;
    }
    .trClass{
        background: #ebf7ff;
    }
    .noData{
        font-size: 26px;
        color: #9ea7b4;
    }
    /* 列表名称、button、表格相同样式 */
    .title{
        font-size: 14px;
        margin-bottom: 5px;
    }
    .total{
        text-align: right;
    }
    .tableWrap{
        width: 100%;
        height: 100%;
        padding: 10px;
        .topTable{
            margin-bottom: 50px;
            height: 50%;
            width: 100%;
        }
        .bottomTable{
            height: 50%;
            width: 100%;
        }
    }
    .highlightColor{
        color: #2d8cf0 !important;
    }
    .treeTable{
        width: 100%;
    }
</style>