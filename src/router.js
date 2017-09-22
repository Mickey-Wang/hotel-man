const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/mapping/hotel',
    meta: {
        title: 'hotelMapping'
    },
    component: (resolve) => require(['./views/pages/hotelMapping.vue'], resolve)
}];
export default routers;