const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/pages/index.vue'], resolve)
},{
    path: '/mapping/hotel',
    meta: {
        title: '酒店聚合'
    },
    component: (resolve) => require(['./views/pages/Mapping/hotelMapping.vue'], resolve)
},{
    path: '/mapping/city',
    meta: {
        title: '城市聚合'
    },
    component: (resolve) => require(['./views/pages/Mapping/cityMapping.vue'], resolve)
},{
    path: '/mapping/room',
    meta: {
        title: '房型聚合'
    },
    component: (resolve) => require(['./views/pages/Mapping/roomMapping.vue'], resolve)
}];
export default routers;