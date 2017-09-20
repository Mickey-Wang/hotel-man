const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/template',
    meta: {
        title: 'template'
    },
    component: (resolve) => require(['./views/template.vue'], resolve)
}];
export default routers;