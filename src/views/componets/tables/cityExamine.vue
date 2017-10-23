<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">城市审核列表</div>
            <div class="button">
                <Button type="primary" @click="toSubmit1">提交</Button>
                <Button type="primary" @click="toSubmit2" v-if="tableType!=10">设为待审</Button>
                <Button type="primary">新增</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table table1">
                <div class="wrap wrapW1">
                    <div ref="w1">
                        <table :style="{'min-width':divWidth1+'px'}">
                            <tr>
                                <th><input type="checkbox" v-if="tableType!=10" v-model="checkAll" @click="toggleCheckAll" :disabled="disableStatus1"></th>
                                <th v-for="(item,index) in cityHeaderData" :key="index">{{item.title}}</th>
                            </tr>
                            <tr v-for="(item,index) in JDHotelApproval"  :key="index" class="fontColor" v-if="tableType!=10">
                                <td></td>
                                <td @click="getInputValue(item)">{{item.cityName}}</td>
                                <td>{{item.cityId}}</td>
                                <td>{{item.provinceName}}</td>
                                <td>{{item.countryName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div ref="h1">
                        <table ref="h2" v-if="cityApprovalList.length>0" :style="{'min-width':divWidth1+'px'}">
                            <tr v-for="(item,index) in cityApprovalList" :key="item.cityId" :class="[{trClass: item.mapStatus=='20'}]">
                                <td><input v-if="item.mapStatus!=''" type="checkbox" v-model="item.checked" @change="oneSelect(item)" :disabled="item.mapStatus=='20'?disableStatus1:disableStatus2"></td>
                                <td @click="getInputValue(item)">{{item.cityName}}</td>
                                <td>{{item.cityId}}</td>
                                <td>{{item.provinceName}}</td>
                                <td>{{item.countryName}}</td>
                                <td>{{item.supplierName}}</td>
                                <td>{{getStatusValue(item.mapStatus)}}</td>
                                <td>{{item.lastOperator}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <td @click="checkShow = true">{{item.operator}}</td>
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
                                <th v-for="(item,index) in similarHeaderData" :key="index">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="h3">
                        <table ref="h4" v-if="similarCityData.length>0" :style="{'min-width':divWidth2+'px'}">
                            <tr v-for="(item,index) in similarCityData" :key="item.cityId">
                                <td><input type="radio" v-model="similar" :value="index" @change="radioSelect(item)"></td>
                                <!--<td>{{item.cityName}}</td>-->
                                <td v-html="highlight(item.cityName, cityValue)"></td>
                                <td>{{item.cityId}}</td>
                                <td>{{item.provinceName}}</td>
                                <td>{{item.countryName}}</td>
                                <td>{{item.supplierName}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="similarCityData==0">
                            暂无数据
                        </div>
                    </div>
                </div>
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
                                <th v-for="(item,index) in checkTitle" :key="index">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table style="width: 767px;">
                            <tr v-for="(item,index) in checkData" :key="index">
                                <td>{{getStatusValue(item.originalValue)}}</td>
                                <td>{{getStatusValue(item.modifedValue)}}</td>
                                <td>{{item.lastModifyTime}}</td>
                                <td>{{item.lastOperator}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="checkData.length==0">
                            暂无数据
                        </div>
                    </div>
                </div>
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
                JDHotelApproval:[
                    {
                        cityName: '阿拉尔',
                        cityId: 'JD-H10',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '京东国内酒店'
                    }
                ],
                cityApprovalList: [
                    {
                        geoMapId:100,
                        cityName: '阿拉尔市',
                        cityId: 'A00061',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '酒店供应商A',
                        mapStatus: '20',
                        lastOperator: 'system',
                        lastModifyTime: '2017/08/11 17:19'
                    },
                    {
                        geoMapId:101,
                        cityName: '阿拉尔市',
                        cityId: 'A00062',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '酒店供应商B',
                        mapStatus: '20',
                        lastOperator: 'system',
                        lastModifyTime: '2017/08/11 17:19'
                    },
                    {
                        geoMapId:102,
                        cityName: '阿拉尔',
                        cityId: 'BUH13',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '酒店供应商C',
                        mapStatus: '30',
                        lastOperator: 'system',
                        lastModifyTime: '2017/08/12 18:00'
                    },
                    {
                        geoMapId:103,
                        cityName: '阿拉尔',
                        cityId: 'CN567',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '酒店供应商D',
                        mapStatus: '30',
                        lastOperator: 'system',
                        lastModifyTime: '2017/08/13 19:00'
                    },
                    {
                        geoMapId:104,
                        cityName: '阿拉尔',
                        cityId: 'DTY44',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '酒店供应商E',
                        mapStatus: '30',
                        lastOperator: 'system',
                        lastModifyTime: '2017/08/16 19:00'
                    },
                    {
                        geoMapId:105,
                        cityName: '阿拉尔',
                        cityId: 'DTY45',
                        provinceName: '新疆',
                        countryName: '中国',
                        supplierName: '酒店供应商E',
                        mapStatus: '30',
                        lastOperator: 'system',
                        lastModifyTime: '2017/08/17 19:00'
                    }
                ],
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
                similarCityData: [
//                    {
//                        cityName: '阿拉尔',
//                        cityId: 'JD-H10',
//                        provinceName: '新疆',
//                        countryName: '中国',
//                        supplierName: '京东国内酒店'
//                    },
//                    {
//                        cityName: '阿拉尔市',
//                        cityId: 'JD-H11',
//                        provinceName: '新疆',
//                        countryName: '中国',
//                        supplierName: '京东国内酒店'
//                    },
//                    {
//                        cityName: '阿拉善',
//                        cityId: 'JD-H12',
//                        provinceName: '新疆',
//                        countryName: '中国',
//                        supplierName: '京东国内酒店'
//                    },
                ],
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
                checkData:[
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:00',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:22',
                        'lastOperator':'系统'
                    },
                    {
                        'originalValue':'20',
                        'modifedValue':'30',
                        'lastModifyTime':'2017-08-13 12:09:22',
                        'lastOperator':'系统'
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
                // 控制模态框显示
                modelShow:false,
                // 控制查看模态框显示
                checkShow:false,
                // 模态框信息
                message:'',
                // div的宽度
                divWidth1:'',
                divWidth2:'',
                // 确定表格哪一种(已聚待审、已聚已审、未聚待审)
                // 这个可以从 getter 里面拿到判断值
                // 10:未聚待审;20:已聚待审;30:已聚已审
                tableType:this.$store.getters.tableType,
                // 确定一下是哪个按钮点击的,提交按钮是1,设为待审按钮是2
                buttonType:0
            }
        },
        created(){
            // cityApprovalList数据中set数据 checked: false
            this.cityApprovalList.forEach((item,index)=>{
                this.$set(item,'checked',false);
                this.$set(item,'operator','查看');
            });
            console.log('tableType:',this.$store.getters.tableType);

            // 关键词接口(下面分别是 GET 方式和 POST 方式)
            /*this.$http.get('resource/geoLandmark/queryCityListByCityName?cityName=阿拉尔').then(res=>{
                console.log('get',response);
            }).catch(error=>{
                console.log('get',error);
            });*/

            /*this.$http.post('resource/geoLandmark/queryCityListByCityName',{"cityName":"阿拉尔"}).then(res=>{
                console.log('post',response);
            }).catch(error=>{
                console.log('post',error);
            });*/

        },
        mounted(){
            // 计算一下初始化第一个表格的宽度
            this.divWidth1 = this.$refs.w1.offsetWidth;
            this.divWidth2 = this.$refs.w2.offsetWidth;
            console.log('宽度:', this.divWidth1);
        },
        watch: {
            cityApprovalList: {
                handler () {
                    let check = true;
                    // 先确定是否有已聚待审的数据的存在
                    if(this.tableType==20 || this.tableType==30){
                        for (let i = 0; i < this.cityApprovalList.length; i++) {
                            let item = this.cityApprovalList[i];
                            if (item.mapStatus === '20') {
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
                        if(this.tableType==20 || this.tableType==30){
                            if (item.mapStatus === '20') {
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
                console.log('点击获取名字:',item.cityName);
                this.cityValue = item.cityName;
                // 按关键词查询京东城市列表接口
                this.$http.get('resource/geoLandmark/queryCityListByCityName?cityName='+this.cityValue).then(res=>{
                    console.log('get',res);
                    this.similarCityData = res.data.body;
                }).catch(error=>{
                    console.log('get',error);
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
            // 点击提交按钮(点击提交按钮)
            toSubmit1(){
                // 确定是提交按钮
                this.buttonType = 1;
                this.submitData.checkBoxData = [];
                if(this.tableType==20 || this.tableType==30){
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        if(this.cityApprovalList[i].mapStatus=='20'&&this.cityApprovalList[i].checked){
                            console.log('提交已聚已审执行这里');
                            this.submitData.checkBoxData.push(this.cityApprovalList[i].geoMapId);
                        }
                    }
                    // 获取酒店审核列表中选中的城市ID
                    if(this.submitData.checkBoxData.length==0){
                        this.instance('info','已聚待审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市提交？';
                    }
                }
                if(this.tableType == 10){
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        if(this.cityApprovalList[i].mapStatus=='30'&&this.cityApprovalList[i].checked){
                            this.submitData.checkBoxData.push(this.cityApprovalList[i].geoMapId);
                        }
                    }
                    console.log('未聚未审设为已审的数据:',this.submitData);
                    if(this.submitData.checkBoxData.length!=0 && this.submitData.radioData.length!=0){
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市提交？';
                    }else {
                        this.instance('info','未聚待审');
                    }
                }
            },
            toSubmit2(){
                // 确定是设为待审按钮
                this.buttonType = 2;
                // 当是已聚待审的时候
                this.submitData1.checkBoxData = [];
                if(this.tableType==20 || this.tableType==30){
                    for(let i=0; i<this.cityApprovalList.length; i++){
                        if(this.cityApprovalList[i].mapStatus == '30'&&this.cityApprovalList[i].checked){
                            this.submitData1.checkBoxData.push(this.cityApprovalList[i].geoMapId);
                        }
                    }
                    console.log('已聚已审的数据:',this.submitData1.checkBoxData,this.submitData1);
                    if(this.submitData1.checkBoxData.length == 0){
                        this.instance('info','已聚已审');
                    }else {
                        this.modelShow = true;
                        this.message = '请确认是否将已选择城市设为待审？';
                    }
                }
                console.log('设为已审的数据:',this.submitData1);
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
                    if(this.cityApprovalList[i].mapStatus!=='20'){
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
            ok () {
                // 提交，设为已审按钮(当不是未聚未审的时候)
                if(this.buttonType==1 && this.tableType!=30){
                    console.log('非未聚未审的数据,设为已审');
                    console.log('提交时候展示数据',this.submitData);
                }
                // 提交，设为已审按钮(当是未聚未审的时候)
                if(this.buttonType==1 && this.tableType==30){
                    console.log('未聚未审的数据，设为已审');
                }
                // 设为待审按钮
                if(this.buttonType == 2){
                    console.log('设为待审');
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
            // 点击Go，获取京东相似数据
            getSimilar(){
                if(this.cityValue==''){
                    this.instance('warning');
                }else {
                    this.$http.get('resource/geoLandmark/queryCityListByCityName?cityName='+this.cityValue).then(res=>{
                        console.log('get',res);
                        this.similarCityData = res.data.body;
                    }).catch(error=>{
                        console.log('get',error);
                    });
                }
            },
            // 10:未聚待审;20:已聚待审;30:已聚已审
            getStatusValue(status){
                switch (status){
                    case '10':
                        return '未聚待审';
                        break;
                    case '20':
                        return '已聚待审';
                        break;
                    case '30':
                        return '已聚已审';
                        break;
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
        border-top: none;
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
    .logTable table tr th, .logTable table tr td{
        width: 25%;
    }
    .logTable div:nth-of-type(2){
        height: 89% !important;
    }
</style>