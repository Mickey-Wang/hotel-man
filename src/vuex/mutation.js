
import {
    START_LOADING,
    FINISH_LOADING,
    ROUTER_NAME,
    LIST_LEN
}
from './mutation-type';
const  mutations={
    //loading开始
    [START_LOADING](state){
        state.asyncLoading = true;
    },
    //loading结束
    [FINISH_LOADING](state){
        state.asyncLoading = false;
    },
    //主导航状态同步
    [ROUTER_NAME](state,data) {
        state.routerName = data;
    }
};
export default mutations;
