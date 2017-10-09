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
};
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
