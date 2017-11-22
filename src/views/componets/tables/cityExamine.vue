<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">城市审核列表</div>
            <div class="button">
                <Button type="primary" @click="toSubmit1" v-if="cityApprovalList.length!=0" :disabled="isNot20Check">提交</Button>
                <Button type="primary" disabled v-else>提交</Button>
                <Button type="primary" @click="toSubmit2" v-if="cityTableType!=10 && cityApprovalList.length!=0" :disabled="is20Check">设为待审</Button>
                <Button type="primary" disabled v-if="cityApprovalList.length==0">设为待审</Button>
                <Button type="primary" v-if="cityApprovalList.length!=0">新增</Button>
                <Button type="primary" disabled v-else>新增</Button>
            </div>
            <div class="total">共计{{cityTotalNum}}条</div>
            <div class="table table1">
                <div class="wrap wrapW1">
                    <div ref="w1">
                        <table :style="{'min-width':divWidth1+'px'}">
                            <tr>
                                <th style="border-top: none;"><input type="checkbox" v-if="cityTableType!=10" v-model="checkAll" @click="toggleCheckAll" :disabled="isNot20Check"></th>
                                <th style="border-top: none;" v-for="(item,index) in cityHeaderData" :key="index">{{item.title}}</th>
                            </tr>
                            <tr class="fontColor" v-if="cityCheckList && cityTableType!=10 && JDCityApproval && cityApprovalList.length!=0">
                                <td></td>
                                <td @click="getInputValue(JDCityApproval)">{{JDCityApproval.cityName}}</td>
                                <td>{{JDCityApproval.cityId}}</td>
                                <td>{{JDCityApproval.provinceName}}</td>
                                <td>{{JDCityApproval.countryName}}</td>
                                <td>{{JDCityApproval.supplierName}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div :style="{'height':cityTableType==10?'85%':'71%'}">
                        <table v-if="cityCheckList && cityApprovalList && cityApprovalList.length>0" :style="{'min-width':divWidth1+'px'}">
                            <tr v-for="(item,index) in cityApprovalList" :key="index" :class="[{trClass: item.mapStatus==20}]">
                                <td><input v-if="item.mapStatus!=''" @click="clearRadioValue" type="checkbox" v-model="item.checked" :disabled="item.mapStatus==20?isNot20Check:is20Check"></td>
                                <td @click="getInputValue(item)">{{item.cityName}}</td>
                                <td>{{item.cityId}}</td>
                                <td>{{item.provinceName}}</td>
                                <td>{{item.countryName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{getStatusValue(item.mapStatus)}}</td>
                                <td>{{item.lastOperator}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <!--<td @click="checkShow = true">查看</td>-->
                                <td @click="getCheckData(item.geoMapId)">查看</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="!cityCheckList || cityApprovalList.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
                <Spin fix v-if="citySyncMappingDataState">
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
            </div>
        </div>
        <div class="bottomTable">
            <div class="title">相似城市列表</div>
            <div class="button">
                <span>城市名称</span>
                <Input v-model="cityValue" placeholder="JD数据模糊比配" style="width: 200px"></Input>
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
                                <!--<td>{{item.cityName}}</td>-->
                                <td v-html="highlight(item.cityName, cityValue)"></td>
                                <td>{{item.cityId}}</td>
                                <td>{{item.provinceName}}</td>
                                <td>{{item.countryName}}</td>
                                <td>{{item.supplierName}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="!similarCityData || similarCityData==0">
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
        <Modal v-model="modelShow" width="500" :closable="false" @on-ok="ok" @on-cancel="cancel">
            <p style="font-size: 16px">{{message}}</p>
        </Modal>
        <Modal
                v-model="checkShow"
                title="查看日志"
                width="800">
            <div class="table table1" style="height: 300px; margin-top: 10px;">
                <div class="wrap wrapW1 logTable" style="min-width: 100%">
                    <div ref="w3">
                        <table style="width: 767px;">
                            <tr>
                                <th style="border-top: none" v-for="(item,index) in checkTitle" :key="index">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div style="overflow-x: hidden">
                        <table style="width: 767px;" v-if="checkData && checkData.length!=0">
                            <tr v-for="(item,index) in checkData" :key="index">
                                <td>{{item.oldString}}</td>
                                <td>{{item.newString}}</td>
                                <td>{{item.operatorName}}</td>
                                <td>{{item.operateTime}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="!checkData || checkData.length==0">
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
                        title: '城市名称',
                        key: 'cityName'
                    },
                    {
                        title: '城市ID',
                        key: 'cityId'
                    },
                    {
                        title: '省份',
                        key: 'provinceName'
                    },
                    {
                        title: '国家',
                        key: 'countryName'
                    },
                    {
                        title: '供应商名称',
                        key: 'supplierName'
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
                        title: '操作时间',
                        key: 'lastModifyTime'
                    },
                    {
                        title: '操作',
                        key: 'operator'
                    }
                ],
                cityApprovalList: [],
                similarHeaderData: [
                    {
                        title: '城市名称',
                        key: 'cityName'
                    },
                    {
                        title: '城市Id',
                        key: 'cityId'
                    },
                    {
                        title: '省份',
                        key: 'provinceName'
                    },
                    {
                        title: '国家',
                        key: 'countryName'
                    },
                    {
                        title: '供应商名称',
                        key: 'supplierName'
                    }
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
                // 全选状态
                checkAll: false,
                // 点击全选时，只有未聚待审可以选中
                // 点击提交给接口的入参
                submitData: {
                    checkBoxData:[],
                    radioData:[]
                },
                // 控制模态框显示
                modelShow:false,
                // 控制查看模态框显示
                checkShow:false,
                // 模态框信息
                message:'',
                // div的宽度
                divWidth1:'',
                divWidth2:'',
                // 10:未聚待审;20:已聚待审;30:已聚已审
                cityTableType:20,
                // 确定一下是哪个按钮点击的,提交按钮是1,设为待审按钮是2
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
                // 相似数据的条数
                similarTotalNum:null
            }
        },
        created(){
            this.$store.subscribe((mutation, state) => {
                if(mutation.type === 'CITY_CHECK_LIST'){
                    this.getCityApprovalList();
                }
            });
            //如果切换左边需要数据也在的话
            //this.getCityApprovalList();
        },
        mounted(){
            // 计算一下初始化第一个表格的宽度
            this.divWidth1 = this.$refs.w1.offsetWidth;
            this.divWidth2 = this.$refs.w2.offsetWidth;
            // 相似城市列表添加 scroll 事件
            this.divH = this.$refs.divH;
            this.divH.addEventListener('scroll',this.addMore);
        },
        computed:{
            // 异常处理
            cityCheckList(){
                return this.$store.getters.cityCheckList;
            },
            // 城市审核列表中的京东城市审核对象
            JDCityApproval(){
                return this.$store.getters.cityCheckList.jdCityApproval;
            },
            is20Check(){
                for (let i = 0; i < this.cityApprovalList.length; i++) {
                    let item = this.cityApprovalList[i];
                    if (item.mapStatus == 20) {
                        if (item.checked) {
                           return true;
                        }
                    }
                }
                return false;
            },
            isNot20Check(){
                for (let i = 0; i < this.cityApprovalList.length; i++) {
                    let item = this.cityApprovalList[i];
                    if (item.mapStatus != 20) {
                        if (item.checked) {
                            return true;
                        }
                    }
                }
                return false;
            },
            cityTotalNum(){
                return this.cityApprovalList.length;
            },
            /*similarTotalNum(){
                return this.similarCityData.length;
            },*/
            citySyncMappingDataState(){
                return this.$store.getters.citySyncMappingDataState;
            },
            isShrinkStatus(){
                return this.$store.getters.isShrinkStatus;
            }
        },
        watch: {
            cityApprovalList: {
                handler () {
                    if(this.arrListLen!=0){
                        let check = true;
                        // 先确定是否有已聚待审的数据的存在
                        if((this.cityTableType==20 || this.cityTableType==30)){
                            for (let i = 0; i < this.cityApprovalList.length; i++) {
                                let item = this.cityApprovalList[i];
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
                        this.$http.get('/resource/geoCommon/jdCityList',{
                            params: {
                                cityName: this.cityValue,
                                pageNum: this.pageNum,
                                pageSize: 20
                            }
                        }).then(res=>{
                            if(res.data.head.code == 200){
                                this.similarCityData = this.similarCityData.concat(res.data.body.cityList);
                            }else {

                            }
                        }).catch(error=>{

                        });
                    }
                }
            },
            // 获取城市审核列表
            getCityApprovalList () {
                if (this.$store.getters.cityCheckList.cityApprovalList) {
                    this.cityApprovalList = this.$store.getters.cityCheckList.cityApprovalList;
                    // 把已聚已审的数据提取到一个数组里面，计算一下数据里面已聚已审的长度
                    let arrList = [];
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        let item = this.cityApprovalList[i];
                        if(item.mapStatus == 20){
                            arrList.push(item);
                        }
                    }
                    this.arrListLen = arrList.length;
                    //====
                    this.cityTableType = this.$store.getters.cityTableType;
                    this.similarCityData = [];
                    this.submitData.radioData = [];
                    this.similar = '';
                    this.cityValue = '';
                }
                this.cityApprovalList.forEach((item,index)=>{
                    this.$set(item,'checked',false);
                });
                if(this.$refs.w1){
                    this.divWidth1 = this.$refs.w1.offsetWidth;
                }
            },
            // 全选
            toggleCheckAll () {
                for (let i = 0; i < this.cityApprovalList.length; i++) {
                    let item = this.cityApprovalList[i];
                    if(this.cityTableType==20 || this.cityTableType==30){
                        if (item.mapStatus == 20) {
                            item.checked = this.checkAll;
                        }
                    }
                }
                this.pushCheckBoxData();
            },
            // 点击城市名称赋值到input，然后调取接口
            getInputValue(item){
                this.cityValue = item.cityName;
                this.toSearch();
            },
            // 点击Go，获取京东相似数据
            getSimilar(){
                if(this.cityValue==''){
                    this.instance('warning');
                    return;
                }
                this.toSearch();
            },
            // 点击城市的时候和Go搜索的时候相同代码提取
            toSearch(){
                this.similar = '';
                this.submitData.radioData = [];
                this.pageNum = 1;
                // 点击的时候 scrollTop 设置为0，防止下次滚动条直接到最下面
                this.divH.scrollTop = 0;
                this.divWidth2 = this.$refs.w2.offsetWidth;
                this.spinShow = true;
                this.$http.get('/resource/geoCommon/jdCityList?cityName='+this.cityValue+'&pageNum=1&pageSize=20').then(res=>{
                    console.log('get',res);
                    this.spinShow = false;
                    if(res.data.head.code == 200){
                        this.pages = res.data.body.pages;// 第一次拿到总页数
                        this.similarTotalNum = res.data.body.total;
                        this.similarCityData = res.data.body.cityList;
                    }else {
                        console.log('city:',"非200");

                    }
                }).catch(error=>{
                    console.log('city:',error);

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
                for(let i=0; i<this.cityApprovalList.length; i++){
                    if(this.cityApprovalList[i].mapStatus==status && this.cityApprovalList[i].checked){
                        this.submitData.checkBoxData.push(this.cityApprovalList[i].geoMapId);
                    }
                }
            },
            // 点击提交按钮(点击提交按钮)
            toSubmit1(){
                // 确定是提交按钮(设为已聚已审的状态)
                this.buttonType = 1;
                this.submitData.checkBoxData = [];
                let radioStr = this.submitData.radioData[0];
                if(radioStr==undefined){
                    this.submitData.radioData.push(this.JDCityApproval.cityId);
                }
                if(this.cityTableType==20 || this.cityTableType==30){
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
                if(this.cityTableType == 10){
                    this.getForData(10);
                    console.log('未聚未审设为已审的数据:',this.submitData);
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
                if(this.cityTableType==20 || this.cityTableType==30){
                    this.getForData(30);
                    if(this.submitData.checkBoxData.length == 0){
                        this.instance('info','已聚已审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市设为待审？';
                    }
                    console.log('2 20 or 30 的设为待审submitData:',this.submitData);
                }
            },
            // 单选框对应的值
            radioSelect(item){
                console.log('radio',item);
                this.submitData.radioData = [];
                this.submitData.radioData.push(item.cityId);
            },
            // 弹框选择确定按钮
            ok () {
                // 提交，设为已审按钮(当不是未聚未审的时候)
                let checkStr = this.submitData.checkBoxData.join(',');
                let radioStr = this.submitData.radioData[0];
                if(this.buttonType==1 && this.cityTableType!=10){
                    this.$http.post('/mapping/cityMapping/approve',{"geoMapIds":checkStr,"geoId":radioStr}).then(res => {
                        console.log('20 or 30 设为已审的接口');
                        if(res.data.head.code == 200){
                            this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE',true);
                            this.modelShow = false;
                            this.cityValue = '';
                        }else {

                        }
                    }).catch((err)=>{

                    })
                }
                // 提交，设为已审按钮(当是未聚未审的时候)
                if(this.buttonType==1 && this.cityTableType==10){
                    console.log('未聚未审的数据，设为已审');
                    this.$http.post('/mapping/cityMapping/approve',{"geoMapIds":checkStr,"geoId":radioStr}).then(res => {
                        if(res.data.head.code == 200){
                            console.log('10 设为已审的接口');
                            this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE',true);
                            this.modelShow = false;
                            this.cityValue = '';
                        }else {

                        }
                    }).catch((err)=>{

                    })
                }
                // 设为待审按钮
                if(this.buttonType == 2){
                    console.log('设为待审');
                    this.$http.post('/mapping/cityMapping/matchedUncheck',{"geoMapIds":checkStr}).then(res=>{
                        if(res.data.head.code==200){
                            console.log('20 or 30 设为待审的接口');
                            this.$store.commit('CITY_SYNC_MAPPING_DATA_STATE',true);
                            this.modelShow = false;
                            this.cityValue = '';
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
            // 获取日志接口
            getCheckData(dataId){
                this.spinShow = true;
                this.checkShow = true;
                this.$http.get('/mapping/log/getLogListByDataId?dataId='+ dataId +'&dataType=10').then(res=>{
                    if(res.data.head.code == 200){
                        this.spinShow = false;
                        this.checkData = res.data.body[0].logDetailList;
                        for(let i=0; i<this.checkData.length; i++){
                            this.checkData[i].operateTime = res.data.body[0].operateTime;
                            this.checkData[i].operatorName = res.data.body[0].operatorName;
                        }
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
                for(let i=0; i<this.cityApprovalList.length; i++){
                    let item = this.cityApprovalList[i];
                    if(item.checked){
                        this.submitData.checkBoxData.push(item);
                    }
                }
                console.log('checkBoxData的长度:',this.submitData.checkBoxData.length);
                // 复选框里面没有被选中了，清除一下radio的值
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
        /*border-right: 1px solid #dddee1;*/
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
    /* 表格横向滚动条和纵向滚动条 */
    .table{
        min-width: 100%;
        position: relative;
        border: 1px solid #dddee1;
        /*border-top: none;*/
        /*border-right: none;*/
        overflow-x: auto;
        .wrapW1{
            min-width: 130%;
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
                overflow-x: hidden;
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
    .logTable table tr th, .logTable table tr td{
        width: 25%;
    }
    .logTable div:nth-of-type(2){
        height: 89% !important;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>