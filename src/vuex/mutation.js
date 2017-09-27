
import {
    START_LOADING,
    FINISH_LOADING,
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
    [LIST_LEN](state, data){
        state.LIST_LEN = data;
    }
};
export default mutations;
