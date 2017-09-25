const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/pages/index.vue'], resolve)
},{
    path: '/mapping/hotel',
    meta: {
        title: 'hotelMapping'
    },
    component: (resolve) => require(['./views/pages/Mapping/hotelMapping.vue'], resolve)
},{
    path: '/mapping/city',
    meta: {
        title: 'cityMapping'
    },
    component: (resolve) => require(['./views/pages/Mapping/cityMapping.vue'], resolve)
},{
    path: '/mapping/room',
    meta: {
        title: 'roomMapping'
    },
    component: (resolve) => require(['./views/pages/Mapping/roomMapping.vue'], resolve)
}];
export default routers;