const routers = [{
    path: '*',
    meta: {
        title: '404EORROR'
    },
    name: '404',
    component: (resolve) => require(['./views/pages/error/404'], resolve)
}, {
    path: '/error_page',
    meta: {
        title: ''
    },
    name: '500',
    component: (resolve) => require(['./views/pages/error/500'], resolve)
}, {
    path: '/',
    meta: {
        title: ''
    },
    name: 'index',
    component: (resolve) => require(['./views/pages/index.vue'], resolve)
}, {
    path: '/Mapping/hotel',
    meta: {
        title: '酒店聚合'
    },
    name: 'hotel',
    component: (resolve) => require(['./views/pages/Mapping/hotelMapping.vue'], resolve)
}, {
    path: '/Mapping/city',
    meta: {
        title: '城市聚合'
    },
    name: 'city',
    component: (resolve) => require(['./views/pages/Mapping/cityMapping.vue'], resolve)
}, {
    path: '/Mapping/room',
    meta: {
        title: '房型聚合'
    },
    name: 'room',
    component: (resolve) => require(['./views/pages/Mapping/roomMapping.vue'], resolve)
}, {
    path: '/promotion/promotionMan',
    meta: {
        title: '促销管理'
    },
    name: 'promotionMan',
    component: (resolve) => require(['./views/pages/promotion'], resolve)
}, {
    path: '/resource/destination',
    meta: {
        title: '目的地管理'
    },
    name: 'destinationMan',
    component: (resolve) => require(['./views/pages/resource/destination/destinationManagement'], resolve)
}, {
    path: '/resource/picture',
    meta: {
        title: '图片管理'
    },
    name: 'pictureMan',
    component: (resolve) => require(['./views/pages/resource/picture/pictureManagement'], resolve)
}, {
    path: '/resource/hotelMan',
    meta: {
        title: '酒店管理'
    },
    name: 'hotelMan',
    component: (resolve) => require(['./views/pages/resource/hotelMan/hotel'], resolve)
}, {
    path: '/resource/hotelAdd',
    meta: {
        title: '新增酒店'
    },
    name: 'hotelAdd',
    component: (resolve) => require(['./views/pages/resource/hotelMan/hotelAdd'], resolve)
}, {
    path: '/resource/hotelMapping',
    meta: {
        title: '酒店管理'
    },
    name: 'hotelMapping',
    component: (resolve) => require(['./views/pages/resource/hotelMan/mapping'], resolve)
}, {
    path: '/resource/room',
    meta: {
        title: '房型列表'
    },
    name: 'roomList',
    component: (resolve) => require(['./views/pages/resource/hotelMan/room'], resolve)
}, {
    path: '/resource/roomAdd',
    meta: {
        title: '新增房间'
    },
    name: 'roomAdd',
    component: (resolve) => require(['./views/pages/resource/hotelMan/roomAdd'], resolve)
}, {
    path: '/resource/hotelLog',
    meta: {
        title: '日志'
    },
    name: 'hotelLog',
    component: (resolve) => require(['./views/pages/resource/hotelMan/log'], resolve)
}, {
    path: '/supplier',
    meta: {
        title: '供应商信息管理'
    },
    name: 'supplier',
    component: (resolve) => require(['./views/pages/Supplier/supplier.vue'], resolve)
}, {
    path: '/supplierMsg/step1',
    meta: {
        title: '供应商信息',
        activeName: 'supplier'
    },
    name: 'step1',
    component: (resolve) => require(['./views/pages/Supplier/supplierMsgStep1.vue'], resolve)
}, {
    path: '/supplierMsg/step2',
    meta: {
        title: '供应商信息',
        activeName: 'supplier'
    },
    name: 'step2',
    component: (resolve) => require(['./views/pages/Supplier/supplierMsgStep2.vue'], resolve)
}, {
    path: '/supplierMsg/customerInfo',
    meta: {
        title: '供应商信息',
        activeName: 'supplier'
    },
    name: 'customerInfo',
    component: (resolve) => require(['./views/pages/Supplier/customerInfo.vue'], resolve)
}, {
    path: '/supplierMsg/check',
    meta: {
        title: '供应商信息',
        activeName: 'supplier'
    },
    name: 'check',
    component: (resolve) => require(['./views/pages/Supplier/checkSupplierMsg.vue'], resolve)
}, {
    path: '/account/leadinbill',
    meta: {
        title: '导入现付到账单',
    },
    name: 'leadInBill',
    component: (resolve) => require(['./views/pages/account/leadInBill'], resolve)
}, {
    path: '/account/billMan',
    meta: {
        title: '账单管理',
    },
    name: 'billMan',
    component: (resolve) => require(['./views/pages/account/billMan'], resolve)
}, {
    path: '/account/accountBill',
    meta: {
        title: '结算单管理',
    },
    name: 'accountBill',
    component: (resolve) => require(['./views/pages/account/accountBill'], resolve)
}];
export default routers;