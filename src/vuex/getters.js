//获取loading状态
export const getLoading = state => state.asyncLoading;
//主导航状态同步
export const routerName = state => state.routerName;
//获取tableType
export const cityTableType = state => state.cityTableType;
export const hotelTableType = state => state.hotelTableType;
export const roomTableType = state => state.roomTableType;
//城市审核列表
export const cityCheckList = state => state.cityCheckList;
//酒店审核列表
export const hotelCheckList = state => state.hotelCheckList;
//房型审核列表
export const roomCheckList = state => state.roomCheckList;
//同步状态
export const citySyncMappingDataState = state =>state.citySyncMappingDataState;
export const hotelSyncMappingDataState = state =>state.hotelSyncMappingDataState;
//获取现在右边是伸展还是收缩
export const isShrinkStatus = state => state.isShrinkStatus;
//供应商管理第一步的信息
export const firstStepMsg = state => state.firstStepMsg;
