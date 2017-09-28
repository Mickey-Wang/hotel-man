<template>
    <section class="tableWrap">
        <div class="topTable">
            <div class="title">城市审核列表</div>
            <div class="button">
                <Button type="primary" @click="toSubmit" v-if="tableType==0">提交</Button>
                <Button type="primary" @click="toSubmit">设为待审</Button>
                <Button type="primary">新增</Button>
            </div>
            <div class="total">共计XX条</div>
            <div class="table">
                <div class="wrap wrapW1">
                    <div :style="{'padding-right':paddingR1+'px'}">
                        <table>
                            <tr>
                                <th><input type="checkbox" v-if="tableType!==1" v-model="checkAll" @click="toggleCheckAll" :disabled="disableStatus1"></th>
                                <th v-for="(item,index) in cityHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="h1">
                        <table ref="h2" v-if="cityExamineData.length>0">
                            <tr v-for="(item,index) in cityExamineData" :class="[{trClass: item.status=='已聚待审'},{fontColor: index==0&&tableType!=2}]">
                                <td v-if="tableType==0" ><input type="checkbox" v-model="item.checked" @change="oneSelect(item)" :disabled="item.status=='已聚待审'?disableStatus1:disableStatus2"></td>
                                <td v-if="tableType==1"><input type="checkbox" v-model="item.checked"></td>
                                <td @click="getInputValue(item)">{{item.name}}</td>
                                <td>{{item.id}}</td>
                                <td>{{item.province}}</td>
                                <td>{{item.country}}</td>
                                <td>{{item.supplier}}</td>
                                <td>{{item.status}}</td>
                                <td>{{item.operatorMan}}</td>
                                <td>{{item.operatorTime}}</td>
                                <td>{{item.operator}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="cityExamineData.length==0">
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
            <div class="table">
                <div class="wrap wrapW2">
                    <div :style="{'padding-right':paddingR2+'px'}">
                        <table>
                            <tr>
                                <th></th>
                                <th v-for="(item,index) in similarHeaderData">{{item.title}}</th>
                            </tr>
                        </table>
                    </div>
                    <div ref="h3">
                        <table ref="h4" v-if="similarCityData.length>0">
                            <tr v-for="(item,index) in similarCityData">
                                <td><input type="radio" v-model="similar" :value="index" @change="radioSelect(item.id)"></td>
                                <!--<td>{{item.name}}</td>-->
                                <td v-html="highlight(item.name, cityValue)"></td>
                                <td>{{item.id}}</td>
                                <td>{{item.province}}</td>
                                <td>{{item.country}}</td>
                                <td>{{item.supplier}}</td>
                            </tr>
                        </table>
                        <div class="noData" v-if="similarCityData==0">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            // 判断是否加padding
            paddingR1: 0,
            paddingR2: 0,
            cityHeaderData: [
                {
                    title: '城市名称',
                    key: 'name'
                },
                {
                    title: '城市ID',
                    key: 'id'
                },
                {
                    title: '省份',
                    key: 'province'
                },
                {
                    title: '国家',
                    key: 'country'
                },
                {
                    title: '供应商名称',
                    key: 'supplier'
                },
                {
                    title: '聚合状态',
                    key: 'status'
                },
                {
                    title: '操作人',
                    key: 'operatorMan'
                },
                {
                    title: '操作时间',
                    key: 'operatorTime'
                },
                {
                    title: '操作',
                    key: 'operator'
                }
            ],
            cityExamineData: [
                {
                    name: '阿拉尔',
                    id: 'JD-H10',
                    province: '新疆',
                    country: '中国',
                    supplier: '京东国内酒店',
                    status: '',
                    operatorMan: '',
                    operatorTime: '',
                    operator: ''
                },
                {
                    name: '阿拉尔市',
                    id: 'A00067',
                    province: '新疆',
                    country: '中国',
                    supplier: '酒店供应商A',
                    status: '已聚待审',
                    operatorMan: 'system',
                    operatorTime: '2017/08/11 17:19',
                    operator: '查看'
                },
                {
                    name: '阿拉尔',
                    id: 'BUH13',
                    province: '新疆',
                    country: '中国',
                    supplier: '酒店供应商B',
                    status: '已聚已审',
                    operatorMan: 'system',
                    operatorTime: '2017/08/12 18:00',
                    operator: '查看'
                },
                {
                    name: '阿拉尔',
                    id: 'CN567',
                    province: '新疆',
                    country: '中国',
                    supplier: '酒店供应商C',
                    status: '已聚已审',
                    operatorMan: 'system',
                    operatorTime: '2017/08/13 19:00',
                    operator: '查看'
                },
                {
                    name: '阿拉尔',
                    id: 'DTY44',
                    province: '新疆',
                    country: '中国',
                    supplier: '酒店供应商D',
                    status: '已聚已审',
                    operatorMan: 'system',
                    operatorTime: '2017/08/16 19:00',
                    operator: '查看'
                }
            ],
            similarHeaderData: [
                {
                    title: '城市名称',
                    key: 'name'
                },
                {
                    title: '城市ID',
                    key: 'id'
                },
                {
                    title: '省份',
                    key: 'province'
                },
                {
                    title: '国家',
                    key: 'country'
                },
                {
                    title: '供应商名称',
                    key: 'supplier'
                }
            ],
            similarCityData: [
                {
                    name: '阿拉尔',
                    id: 'JD-H10',
                    province: '新疆',
                    country: '中国',
                    supplier: '京东国内酒店'
                },
                {
                    name: '阿拉尔市',
                    id: 'JD-H11',
                    province: '新疆',
                    country: '中国',
                    supplier: '京东国内酒店'
                },
                {
                    name: '阿拉善',
                    id: 'JD-H12',
                    province: '新疆',
                    country: '中国',
                    supplier: '京东国内酒店'
                },
//                {
//                    name: '阿尔拉',
//                    id: 'JD-H10',
//                    province:'新疆',
//                    country:'中国',
//                    supplier:'京东国内酒店'
//                }
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
            // 控制模态框显示
            modelShow:false,
            // 模态框信息
            message:'',
            // 确定表格哪一种(已聚待审、已聚已审、未聚待审)
            // 这个可以从 getter 里面拿到判断值
            // 假设0为已聚待审,1已聚已审,2未聚待审
            tableType:0
        }
    },
    created(){
        // cityExamineData数据中set数据 checked: false
        this.cityExamineData.forEach((item,index)=>{
            this.$set(item,'checked',false);
        });
    },
    mounted(){
        // 如果有滚动条，要去掉滚动条的宽度
        let h1 = this.$refs.h1.offsetHeight;
        let h2 = this.$refs.h2.offsetHeight;
        let h3 = this.$refs.h3.offsetHeight;
        let h4 = this.$refs.h4.offsetHeight;
        this.paddingR1 = this.getPadding(h1,h2);
        this.paddingR2 = this.getPadding(h3,h4);
    },
    watch: {
        cityExamineData: {
            handler () {
                let check = true;
                // 先确定是否有已聚待审的数据的存在
                if(this.tableType==0){
                    for (let i = 0; i < this.cityExamineData.length; i++) {
                        let item = this.cityExamineData[i];
                        if (item.status === '已聚待审') {
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
                for (let i = 0; i < this.cityExamineData.length; i++) {
                    let item = this.cityExamineData[i];
                    if(this.tableType==0){
                        if (item.status === '已聚待审') {
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
            console.log('点击获取名字:',item.name);
            this.cityValue = item.name;
        },
        // 判断padding为多少
        getPadding(h1,h2){
            if(h1>=h2){
                return 0;
            }else {
                return 17;
            }
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
        toSubmit(){
           console.log('点击提交');
            this.submitData.checkBoxData = [];
           for(let i=0; i<this.cityExamineData.length; i++){
               if(this.cityExamineData[i].checked){
                    console.log('checked的ID:',this.tableType,this.cityExamineData[i].id);
                    this.submitData.checkBoxData.push(this.cityExamineData[i].id);
               }
           }
           //接口调取成功之后，计算一下未聚待审数据的长度
            let dataLen = 0;
            if (this.tableType==0){
                for(let i=0; i<this.cityExamineData.length; i++){
                    if(this.cityExamineData[i].status == '已聚待审'){
                        dataLen ++;
                    }
                }

                console.log('列表的长度:', this.tableType, dataLen);
                this.$store.commit('LIST_LEN',dataLen);
            }
            if(this.tableType==1){
                for(let i=0; i<this.cityExamineData.length; i++){
                    if(this.cityExamineData[i].status == '已聚已审'){
                        dataLen ++;
                    }
                }
                console.log('列表的长度:', this.tableType, dataLen);
                this.$store.commit('LIST_LEN',dataLen);
            }
            console.log('提交的数据:',this.submitData);
            console.log('多选框和单选框的长度:',this.submitData.checkBoxData.length,this.submitData.radioData.length);
            if(this.submitData.checkBoxData.length==0 || this.submitData.radioData.length==0){
                this.instance('info');
            }else {
                this.modelShow = true;
                this.message = '请确认是否将已选择城市提交？';
            }
        },

        // 单选框对应的值
        radioSelect(id){
            console.log('radio',id);
            this.submitData.radioData = [];
            this.submitData.radioData.push(id);
        },
        // 单个复选框选择的时候
        oneSelect(item){
            for (let i=0; i<this.cityExamineData.length; i++){
                if(this.cityExamineData[i].status!=='已聚待审'){
                    if(this.cityExamineData[i].checked){
                        this.disableStatus1 = true;
                    }
                }else {
                    if(this.cityExamineData[i].checked){
                        this.disableStatus2 = true;
                    }
                }
            }
        },
        // 弹框选择确定按钮
        ok () {

        },
        // 弹框选择取消按钮
        cancel () {

        },
        instance (type) {
            const content1 = '<p style="font-size: 16px;">请必须选择一个京东城市和至少一个(含)供应商城市"已聚待审"的数据</p>';
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
    height: 40px;
}
table th{
    /*background: #f8f8f9;*/
}
table tr td:nth-of-type(1),table tr th:nth-of-type(1){
    border-left: none;
    width: 60px;
}
.wrapW1 table tr td:nth-of-type(2){
    cursor: pointer;
}
/*table tr:hover{*/
    /*background: #ebf7ff;*/
/*}*/
/* 表格横向滚动条和纵向滚动条 */
.table{
    height: 60%;
    min-width: 100%;
    position: relative;
    border: 1px solid #dddee1;
    border-top: none;
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
            background: #f8f8f9;
            table{
                table-layout: fixed;
            }
        }
        div:nth-of-type(2){
            height: 74%;
            overflow: auto;
            table{
                table-layout: fixed;
            }
        }
    }
}
/*.wrapW1 table tr:nth-of-type(1) td{*/
    /*color: #2d8cf0;*/
/*}*/
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
    font-size: 16px;
    margin-bottom: 10px;
}
.button{
    margin-bottom: 10px;
}
.total{
    text-align: right;
}
.tableWrap{
    width: 100%;
    height: 100%;
    padding: 10px;
    .topTable{
        margin-bottom: 20px;
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
</style>