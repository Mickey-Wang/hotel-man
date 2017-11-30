import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutation';

Vue.use(Vuex);

let state = {
  //异步加载loading
    asyncLoading : false,
  //主导航状态同步
    routerName:'',
  //10:未聚待审;20:已聚待审;30:已聚已审(默认未聚待审)
    cityTableType:20,
    hotelTableType:20,
    roomTableType:20,
    //审核列表数据
    cityCheckList:{},
    hotelCheckList:{},
    roomCheckList:{},
    //同步状态
    citySyncMappingDataState:false,
    hotelSyncMappingDataState:false,
    //获取现在右边是伸展还是收缩
    isShrinkStatus:false,
    //供应商管理第一步存的数据
    firstStepMsg:{}
};
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});
