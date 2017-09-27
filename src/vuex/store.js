import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutation';

Vue.use(Vuex);

let state = {

};
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
