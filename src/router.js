const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    name:'index',
    component: (resolve) => require(['./views/pages/index.vue'], resolve)
},{
    path: '/mapping/hotel',
    meta: {
        title: '酒店聚合'
    },
    name:'hotel',
    component: (resolve) => require(['./views/pages/Mapping/hotelMapping.vue'], resolve)
},{
    path: '/mapping/city',
    meta: {
        title: '城市聚合'
    },
    name:'city',
    component: (resolve) => require(['./views/pages/Mapping/cityMapping.vue'], resolve)
},{
    path: '/mapping/room',
    meta: {
        title: '房型聚合'
    },
    name:'room',
    component: (resolve) => require(['./views/pages/Mapping/roomMapping.vue'], resolve)
},{
    path: '/resource/destination',
    meta: {
        title: '目的地管理'
    },
    name:'destinationMan',
    component: (resolve) => require(['./views/pages/resource/destination/destinationManagement'], resolve)
},{
    path: '/resource/picture',
    meta: {
        title: '图片管理'
    },
    name:'pictureMan',
    component: (resolve) => require(['./views/pages/resource/picture/pictureManagement'], resolve)
},{
    path: '/supplier',
    meta: {
        title: '供应商信息管理'
    },
    name:'supplier',
    component: (resolve) => require(['./views/pages/Supplier/supplier.vue'], resolve)
},{
    path:'/supplierMsg/step1',
    meta:{
       title:'供应商信息',
       activeName: 'supplier'
    },
    name:'step1',
    component: (resolve) => require(['./views/pages/Supplier/supplierMsgStep1.vue'], resolve)
},{
    path:'/supplierMsg/step2',
    meta:{
        title:'供应商信息',
        activeName: 'supplier'
    },
    name:'step2',
    component: (resolve) => require(['./views/pages/Supplier/supplierMsgStep2.vue'], resolve)
},{
    path:'/supplierMsg/customerInfo',
    meta:{
        title:'供应商信息',
        activeName: 'supplier'
    },
    name:'customerInfo',
    component: (resolve) => require(['./views/pages/Supplier/customerInfo.vue'], resolve)
},{
    path:'/supplierMsg/check',
    meta:{
        title:'供应商信息',
        activeName: 'supplier'
    },
    name:'check',
    component: (resolve) => require(['./views/pages/Supplier/checkSupplierMsg.vue'], resolve)
}];
export default routers;