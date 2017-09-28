
import {
    START_LOADING,
    FINISH_LOADING,
    ROUTER_NAME,
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
    [ROUTER_NAME](state,data){
        state.routerName = data;
    }
};
export default mutations;
