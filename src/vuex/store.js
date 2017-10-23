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
  cityCheckList:{},
  hotelCheckList:{},
  roomCheckList:{}
};
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
