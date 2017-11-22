<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">酒店审核列表</div>
            <div class="button">
                <Button type="primary" @click="toSubmit1" v-if="hotelApprovalList.length!=0" :disabled="isNot20Check">提交</Button>
                <Button type="primary" disabled v-else>提交</Button>
                <Button type="primary" @click="toSubmit2" v-if="hotelTableType!=10 && hotelApprovalList.length!=0" :disabled="is20Check">设为待审</Button>
                <Button type="primary" disabled v-if="hotelApprovalList.length==0">设为待审</Button>
                <Button type="primary" v-if="hotelApprovalList.length!=0">新增</Button>
                <Button type="primary" disabled v-else>新增</Button>
            </div>
            <div class="total">共计{{hotelTotalNum}}条</div>
            <div class="table table1">
                <div class="wrap wrapW1">
                    <div ref="w1">
                        <table :style="{'min-width':divWidth1+'px'}">
                            <tr>
                                <th style="border-top: none;"><input type="checkbox" v-if="hotelTableType!=10" v-model="checkAll" @click="toggleCheckAll" :disabled="isNot20Check"></th>
                                <th style="border-top: none;" v-for="(item,index) in cityHeaderData" :key="index">{{item.title}}</th>
                            </tr>
                            <tr class="fontColor" v-if="hotelCheckList && hotelTableType!=10 && JDHotelApproval && hotelApprovalList.length!=0">
                                <td></td>
                                <td @click="getInputValue(JDHotelApproval)">{{JDHotelApproval.hotelName}}</td>
                                <td>{{JDHotelApproval.address}}</td>
                                <td>{{JDHotelApproval.tel}}</td>
                                <td>{{JDHotelApproval.distance}}</td>
                                <td>{{JDHotelApproval.link}}</td>
                                <td>{{JDHotelApproval.cityName}}</td>
                                <td>{{JDHotelApproval.supplierName}}</td>
                                <td>{{JDHotelApproval.hotelId}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div :style="{'height':hotelTableType==10?'86%':'71%'}">
                        <table v-if="hotelCheckList && hotelApprovalList && hotelApprovalList.length>0" :style="{'min-width':divWidth1+'px'}">
                            <tr v-for="(item,index) in hotelApprovalList" :key="index" :class="[{trClass: item.mapStatus==20}]">
                                <td><input v-if="item.mapStatus!=''" @click="clearRadioValue" type="checkbox" v-model="item.checked" :disabled="item.mapStatus==20?isNot20Check:is20Check"></td>
                                <td @click="getInputValue(item)">{{item.hotelName}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.distance}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{item.hotelId}}</td>
                                <td>{{getStatusValue(item.mapStatus)}}</td>
                                <td>{{item.lastOperator}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <!--<td @click="checkShow = true">查看</td>-->
                                <td @click="getCheckData(item.geoMapId)">查看</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="!hotelCheckList || hotelApprovalList.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
                <Spin fix v-if="hotelSyncMappingDataState">
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </div>
        </div>
        <div class="bottomTable">
            <div class="title">相似城市列表</div>
            <div class="button">
                <span>酒店名称</span>
                <Input v-model="hotelValue" placeholder="JD数据模糊比配" style="width: 200px"></Input>
                <Button type="primary" @click="getSimilar">Go</Button>
            </div>
            <div class="total">共计{{similarTotalNum}}条</div>
            <div class="table table2">
                <div class="wrap wrapW2">
                    <div ref="w2">
                        <table :style="{'min-width':divWidth2+'px'}">
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in similarHeaderData" :key="index">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="divH" style="height: 80%;">
                        <table ref="tableH" v-if="similarCityData && similarCityData.length>0" :style="{'min-width':divWidth2+'px'}">
                            <tr v-for="(item,index) in similarCityData" :key="index">
                                <td><input type="radio" v-model="similar" :value="index" @change="radioSelect(item)"></td>
                                <td>{{item.hotelId}}</td>
                                <td v-html="highlight(item.hotelName, hotelValue)"></td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <!--<td @click="treeShow = true">Tree信息</td>-->
                                <td @click="getTreeData(item.hotelId)">Tree信息</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="similarCityData && similarCityData==0">
                            暂无数据
                        </div>
                    </div>
                </div>
                <Spin fix v-if="spinShow">
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </div>
        </div>
        <Modal
                v-model="checkShow"
                title="查看日志"
                width="800">
            <div class="table table1" style="height: 300px; margin-top: 10px;">
                <div class="wrap wrapW1 logTable" style="min-width: 100%">
                    <div ref="w3">
                        <table style="width: 767px;">
                            <tr>
                                <th v-for="(item,index) in checkTitle" :key="index">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div style="overflow-x: hidden">
                        <table style="width: 767px;">
                            <tr v-for="(item,index) in checkData" :key="index">
                                <td>{{getStatusValue(item.originalValue)}}</td>
                                <td>{{getStatusValue(item.modifedValue)}}</td>
                                <td>{{item.operateTime}}</td>
                                <td>{{item.operator}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="checkData.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
                <Spin fix v-if="spinShow">
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
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
            <div class="table table1 treeTable" style="height: 300px; margin-top: 10px;">
                <div class="wrap wrapW1" style="min-width: 100%">
                    <div ref="w3">
                        <table style="width: 1266px;">
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in treeTitle" :key="index">{{item.title}}</th>
                            </tr>
                            <tr class="fontColor" v-for="(item,index) in treeJDHotelApproval" :key="index">
                                <td></td>
                                <td>{{item.hotelName}}</td>
                                <td>{{item.address}}</td>
                                <td>{{item.tel}}</td>
                                <td>{{item.distance}}</td>
                                <td>{{item.link}}</td>
                                <td>{{item.cityName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{item.hotelId}}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div style="overflow-x: hidden">
                        <table style="width: 1266px;">
                            <tr v-for="(item,index) in treeData" v-if="index>0" :key="index">
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
                                <td>{{getStatusValue(item.mapStatus)}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="treeData.length==0&&treeJDHotelApproval.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
                <Spin fix v-if="spinShow">
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </div>
            <div slot="footer">
                <Button v-if="false"></Button>
            </div>
        </Modal>
        <Modal v-model="modelShow" width="500" :closable="false" @on-ok="ok" @on-cancel="cancel">
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
                hotelValue: '',
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
                hotelApprovalList: [],
                similarHeaderData: [
                    {
                        title: '酒店ID',
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
                similarCityData: [],
                // 点击查看表格的数据
                checkTitle:[
                    {
                        title: '原值',
                        key: 'originalValue'
                    },
                    {
                        title: '新值',
                        key: 'modifedValue'
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
                checkData:[],
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
                treeJDHotelApproval:[],
                treeData:[],
                // 全选状态
                checkAll: false,
                // 点击提交给接口的入参
                submitData: {
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
                // 10:未聚待审;20:已聚待审;30:已聚已审
                hotelTableType:20,
                // 确定一下是哪个按钮点击的,提交按钮是1,设为待审按钮是2,3为查看Tree信息的按钮
                buttonType:0,
                // 控制loading
                spinShow:false,
                // 已聚已审数据的长度
                arrListLen:0,
                // 带滚动条的div
                divH:null,
                tableScrollH:null,
                // 默认第一页
                pageNum:1,
                // 总页数
                pages:null,
                similarTotalNum:null
            }
        },
        created(){
            this.$store.subscribe((mutation, state) => {
                if(mutation.type === 'HOTEL_CHECK_LIST'){
                    this.getHotelApprovalList();
                }
            });
        },
        mounted(){
            // 计算一下初始化第一个表格的宽度
            this.divWidth1 = this.$refs.w1.offsetWidth;
            this.divWidth2 = this.$refs.w2.offsetWidth;
            this.divWidth3 = this.$refs.w3.offsetWidth;
            // 相似城市列表添加 scroll 事件
            this.divH = this.$refs.divH;
            this.divH.addEventListener('scroll',this.addMore);
        },
        computed:{
            // 后端接口状态一共有3种: code、body为null、进入catch
            // 判断一下后端返回来的接口是为null
            hotelCheckList(){
                return this.$store.getters.hotelCheckList;
            },
            JDHotelApproval(){
                return this.$store.getters.hotelCheckList.jdHotelApproval;
            },
            is20Check(){
                for (let i = 0; i < this.hotelApprovalList.length; i++) {
                    let item = this.hotelApprovalList[i];
                    if (item.mapStatus == 20) {
                        if (item.checked) {
                            return true;
                        }
                    }
                }
                return false;
            },
            isNot20Check(){
                for (let i = 0; i < this.hotelApprovalList.length; i++) {
                    let item = this.hotelApprovalList[i];
                    if (item.mapStatus != 20) {
                        if (item.checked) {
                            return true;
                        }
                    }
                }
                return false;
            },
            hotelTotalNum(){
                return this.hotelApprovalList.length;
            },
            /*similarTotalNum(){
                return this.similarCityData.length;
            },*/
            hotelSyncMappingDataState(){
                return this.$store.getters.hotelSyncMappingDataState;
            },
            isShrinkStatus(){
                return this.$store.getters.isShrinkStatus;
            }
        },
        watch: {
            hotelApprovalList: {
                handler () {
                    if(this.arrListLen!=0){
                        let check = true;
                        // 先确定是否有已聚待审的数据的存在
                        if(this.hotelTableType==20 || this.hotelTableType==30){
                            for (let i = 0; i < this.hotelApprovalList.length; i++) {
                                let item = this.hotelApprovalList[i];
                                if (item.mapStatus === 20) {
                                    if (!item.checked) {
                                        check = false;
                                        break;
                                    }
                                }
                            }
                            this.checkAll = check;
                        }
                    }
                },
                deep: true
            },
            isShrinkStatus:function (newValue, oldValue) {
                if(!newValue){
                    this.divWidth1 = 1118;
                    this.divWidth2 = 860;
                }
            }
        },
        methods:{
            // 下拉加载
            addMore(){
                //console.log('当前页数--1:',this.pageNum);
                let divHeight = this.divH.offsetHeight;
                let divScrollTop = this.divH.scrollTop;
                if(this.$refs.tableH){
                    this.tableScrollH = this.$refs.tableH.scrollHeight;
                    if(this.tableScrollH-divHeight-divScrollTop<=1){
                        console.log('拉到底了...');
                        this.pageNum ++;
                        // 小于等于总页数才请求接口
                        if(this.pageNum > this.pages){
                            return;
                        }
                        this.$http.get('/resource/hotel/jdHotelList?hotelName='+this.hotelValue+'&pageNum='+this.pageNum+'&pageSize=20').then(res=>{
                            if(res.data.head.code == 200){
                                this.similarCityData = this.similarCityData.concat(res.data.body.hotelList);
                            }else {

                            }
                        }).catch(error=>{

                        });
                    }
                }
            },
            getHotelApprovalList(){
                if (this.$store.getters.hotelCheckList.hotelApprovalList) {
                    this.hotelApprovalList = this.$store.getters.hotelCheckList.hotelApprovalList;
                    // 把已聚已审的数据提取到一个数组里面，计算一下数据里面已聚已审的长度
                    let arrList = [];
                    for(let i=0; i<this.hotelApprovalList.length; i++){
                        let item = this.hotelApprovalList[i];
                        if(item.mapStatus == 20){
                            arrList.push(item);
                        }
                    }
                    this.arrListLen = arrList.length;
                    //==
                    this.hotelTableType = this.$store.getters.hotelTableType;
                    this.similarCityData = [];
                    this.submitData.radioData = [];
                    this.similar = '';
                    this.hotelValue = '';
                }
                this.hotelApprovalList.forEach((item,index)=>{
                    this.$set(item,'checked',false);
                });
                if(this.$refs.w1){
                    this.divWidth1 = this.$refs.w1.offsetWidth;
                }
            },
            // 全选
            toggleCheckAll () {
                // 等model变化完再执行事件
                for (let i = 0; i < this.hotelApprovalList.length; i++) {
                    let item = this.hotelApprovalList[i];
                    if(this.hotelTableType==20 || this.hotelTableType==30){
                        if (item.mapStatus === 20) {
                            item.checked = this.checkAll;
                        }
                    }
                }
                this.pushCheckBoxData();
            },
            // 点击城市名称赋值到input，然后调取接口
            getInputValue(item){
                this.hotelValue = item.hotelName;
                this.toSearch();
            },
            // 点击Go，获取京东相似数据
            getSimilar(){
                if(this.hotelValue==''){
                    this.instance('warning');
                    return;
                }
                this.toSearch();
            },
            toSearch(){
                this.similar = '';
                this.submitData.radioData = [];
                this.pageNum = 1;
                // 点击的时候 scrollTop 设置为0，防止下次滚动条直接到最下面
                this.divH.scrollTop = 0;
                this.divWidth2 = this.$refs.w2.offsetWidth;
                this.spinShow = true;
                this.$http.get('/resource/hotel/jdHotelList?hotelName='+this.hotelValue+'&pageNum=1&pageSize=20').then(res=>{
                    this.spinShow = false;
                    if(res.data.head.code == 200){
                        this.similarTotalNum = res.data.body.total;
                        this.pages = res.data.body.pages;// 第一次拿到总页数
                        this.similarCityData = res.data.body.hotelList;
                    }else {

                    }
                }).catch(error=>{

                });
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
            // for 循环提取出来
            getForData(status){
                for(let i=0; i<this.hotelApprovalList.length; i++){
                    if(this.hotelApprovalList[i].mapStatus==status && this.hotelApprovalList[i].checked){
                        this.submitData.checkBoxData.push(this.hotelApprovalList[i].hotelMapId);
                    }
                }
            },
            // 点击提交按钮(点击提交按钮)
            toSubmit1(){
                // 确定是提交按钮
                this.buttonType = 1;
                this.submitData.checkBoxData = [];
                let radioStr = this.submitData.radioData[0];
                if(radioStr==undefined){
                    this.submitData.radioData.push(this.JDHotelApproval.hotelId);
                }
                if(this.hotelTableType==20 || this.hotelTableType==30){
                    this.getForData(20);
                    // 获取酒店审核列表中选中的城市ID
                    if(this.submitData.checkBoxData.length==0){
                        this.instance('info','已聚待审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市提交？';
                    }
                    console.log('1 20 or 30的设为已审submitData:',this.submitData);
                }
                if(this.hotelTableType == 10){
                    this.getForData(10);
                    if(this.submitData.checkBoxData.length!=0 && this.submitData.radioData.length!=0){
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市提交？';
                    }else {
                        this.instance('info','未聚待审');
                    }
                    console.log('1 10 的设为已审submitData:',this.submitData);
                }
            },
            toSubmit2(){
                // 确定是设为待审按钮
                this.buttonType = 2;
                // 当是已聚待审的时候
                this.submitData.checkBoxData = [];
                if(this.hotelTableType==20 || this.hotelTableType==30){
                    this.getForData(30);
                    if(this.submitData.checkBoxData.length == 0){
                        this.instance('info','已聚已审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市设为待审？';
                    }
                }
                console.log('2 20 or 30 的设为待审submitData:',this.submitData);
            },
            // tree表格上面的按钮
            treeSubmit(){
                this.buttonType = 3;
                this.submitData.checkBoxData = [];
                for(let i=0; i<this.treeData.length; i++){
                    if(this.treeData[i].mapStatus == 30&&this.treeData[i].checked){
                        this.submitData.checkBoxData.push(this.treeData[i].hotelMapId);
                    }
                }
                console.log('选择的Tree信息:',this.submitData);
                if(this.submitData.checkBoxData.length == 0){
                    this.instance('info','已聚已审');
                }else {
                    this.modelShow = true;
                    this.message = '请确认是否将已选择城市设为待审？';
                }
            },
            // 单选框对应的值
            radioSelect(item){
                console.log('radio',item);
                this.submitData.radioData = [];
                this.submitData.radioData.push(item.hotelId);
            },
            // 弹框选择确定按钮
            ok () {
                let checkStr = this.submitData.checkBoxData.join(',');
                let radioStr = this.submitData.radioData[0];
                // 提交，设为已审按钮(当不是未聚未审的时候)
                if(this.buttonType==1 && this.hotelTableType!=10){
                    this.$http.post('/mapping/hotelMapping/approve',{"hotelMapIds":checkStr,"jdHotelId":radioStr}).then(res => {
                        if(res.data.head.code==200){
                            this.$store.commit('HOTEL_SYNC_MAPPING_DATA_STATE',true);
                            this.modelShow = false;
                            this.hotelValue = '';
                        }else {

                        }
                    }).catch((err)=>{

                    })
                }
                // 提交，设为已审按钮(当是未聚未审的时候)
                if(this.buttonType==1 && this.hotelTableType==10){
                    this.$http.post('/mapping/hotelMapping/approve',{"hotelMapIds":checkStr,"jdHotelId":radioStr}).then(res => {
                        if(res.data.head.code==200){
                            this.$store.commit('HOTEL_SYNC_MAPPING_DATA_STATE',true);
                            this.modelShow = false;
                            this.hotelValue = '';
                        }else {

                        }
                    }).catch((err)=>{

                    })
                }
                // 设为待审按钮
                if(this.buttonType == 2){
                    this.$http.post('/mapping/hotelMapping/matchedUncheck',{"hotelMapIds":checkStr}).then(res=>{
                        if(res.data.head.code==200){
                            this.$store.commit('HOTEL_SYNC_MAPPING_DATA_STATE',true);
                            this.modelShow = false;
                            this.hotelValue = '';
                        }else {

                        }
                    }).catch(err=>{

                    })
                }
                // tree中的设为已聚待审的按钮
                if(this.buttonType == 3){
                    this.$http.post('/mapping/hotelMapping/matchedUncheck',{"hotelMapIds":checkStr}).then(res=>{
                        if(res.data.head.code==200){
                            this.$store.commit('HOTEL_SYNC_MAPPING_DATA_STATE',true);
                            this.treeShow = false;
                            this.hotelValue = '';
                        }else {

                        }
                    }).catch(err=>{

                    })
                }
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
            // 10:未聚待审;20:已聚待审;30:已聚已审
            getStatusValue(status){
                switch (status){
                    case 10:
                        return '未聚待审';
                        break;
                    case 20:
                        return '已聚待审';
                        break;
                    case 30:
                        return '已聚已审';
                        break;
                }
            },
            // 点击查看日志
            getCheckData(dataId){
                this.spinShow = true;
                this.checkShow = true;
                this.$http.get('/mapping/log/getLogListByDataId?dataId='+ dataId +'&dataType=2').then(res=>{
                    this.spinShow = false;
                    if(res.data.head.code == 200){
                        this.checkData = res.data.body[0].logDetailList;
                        for(let i=0; i<this.checkData.length; i++){
                            this.checkData[i].operateTime = res.data.body[0].operateTime;
                            this.checkData[i].operatorName = res.data.body[0].operatorName;
                        }
                    }else {
                        this.checkShow = false;

                    }
                }).catch(err=>{
                    this.checkShow = false;
                    this.spinShow = false;

                })
            },
            // 点击查看Tree信息
            getTreeData(JDHotelId){
                this.treeShow = true;
                this.spinShow = true;
                this.$http.get('/mapping/hotelMapping/getHotelTreeByJDHotelId?jdHotelId=' + JDHotelId).then(res=>{
                    if(res.data.head.code == 200){
                        console.log('tree信息JDHotelApproval:',res.data.body.jdHotelApproval);
                        console.log('tree信息hotelApprovalList:',res.data.body.hotelApprovalList);
                        this.spinShow = false;
                        this.treeJDHotelApproval = [];
                        this.treeJDHotelApproval.push(res.data.body.jdHotelApproval);
                        this.treeData = res.data.body.hotelApprovalList;
                    }else {

                    }
                }).catch(err=>{

                })
            },
            // 当勾选复选框的时候,重置一下radio的value值
            clearRadioValue(){
                this.pushCheckBoxData();
            },
            // 判断所选的状态如果是选中的状态，this.submitData.checkBoxData 中
            pushCheckBoxData(){
                this.submitData.checkBoxData = [];
                for(let i=0; i<this.hotelApprovalList.length; i++){
                    let item = this.hotelApprovalList[i];
                    if(item.checked){
                        this.submitData.checkBoxData.push(item);
                    }
                }
                console.log('checkBoxData的长度:',this.submitData.checkBoxData.length);
                if(this.submitData.checkBoxData.length==0){
                    this.similar = '';
                    this.submitData.radioData = [];
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
        /*border-top: none;*/
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
                /*height: 74%;*/
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
        overflow-y: hidden;
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
    .treeTable div:nth-of-type(2){
        height: 76% !important;
    }
    .logTable table tr th, .logTable table tr td{
        width: 25%;
    }
    .logTable div:nth-of-type(2){
        height: 89% !important;
    }
</style>