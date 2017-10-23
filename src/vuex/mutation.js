
import {
    START_LOADING,
    FINISH_LOADING,
    ROUTER_NAME,
    CITY_TABLETYPE,
    HOTEL_TABLETYPE,
    ROOM_TABLETYPE
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
    [CITY_TABLETYPE](state,data){
        state.cityTableType = data;
    },
    [HOTEL_TABLETYPE](state,data){
        state.hotelTableType = data;
    },
    [ROOM_TABLETYPE](state,data){
        state.roomTableType = data;
    },
};
export default mutations;
