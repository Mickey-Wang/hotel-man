
import {
    START_LOADING,
    FINISH_LOADING,
    ROUTER_NAME,
    CITY_TABLETYPE,
    HOTEL_TABLETYPE,
    ROOM_TABLETYPE,
    CITY_CHECK_LIST,
    HOTEL_CHECK_LIST,
    ROOM_CHECK_LIST,
    CITY_SYNC_MAPPING_DATA_STATE,
    HOTEL_SYNC_MAPPING_DATA_STATE,
    IS_SHRINK_STATUS,
    FIRST_STEP_MSG
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
    //城市审核列表
    [CITY_CHECK_LIST](state,data){
        state.cityCheckList = data;
    },
    //酒店审核列表
    [HOTEL_CHECK_LIST](state,data){
        state.hotelCheckList = data;
    },
    //房型审核列表
    [ROOM_CHECK_LIST](state,data){
        state.roomCheckList = data;
    },
    //mapping数据同步
    [CITY_SYNC_MAPPING_DATA_STATE](state){
        state.citySyncMappingDataState = !state.citySyncMappingDataState;
    },
    [HOTEL_SYNC_MAPPING_DATA_STATE](state){
        state.hotelSyncMappingDataState = !state.hotelSyncMappingDataState;
    },
    //获取现在右边是伸展还是收缩
    [IS_SHRINK_STATUS](state,data){
        state.isShrinkStatus = data;
    },
    // 供应商管理第一步的信息
    [FIRST_STEP_MSG](state,data){
        state.firstStepMsg = data;
    }
};
export default mutations;
