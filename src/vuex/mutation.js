
import {
    START_LOADING,
    FINISH_LOADING,
    ROUTER_NAME,
    TABLE_TYPE
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
    },
    //tableType
    [TABLE_TYPE](state,data){
        state.tableType = data;
    }
};
export default mutations;
