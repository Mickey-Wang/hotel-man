import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
//import '../theme/dist/iview.css';
import filter from '../src/libs/filter';
import store from './vuex/store';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);

//添加响应拦截器
Util.ajax.interceptors.response.use(function (response) {
    // console.log(response);
    //对响应数据做些事
    if (response.data.head.code !== "200") {
        var msg = response.data.head.message;
        vm.$Notice.warning({
            title: msg,
        });
        // console.log(msg);
    }
    return response;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});
Vue.prototype.$http = Util.ajax;
//Vue.prototype.highlight =

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers,
    // base:'/hotelman'
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    store.commit('ROUTER_NAME', to.meta.activeName || to.name);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

Object.keys(filter).forEach(function(k) {
    Vue.filter(k, filter[k]);
});

const vm = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});