import vue from 'vue';

let _baseUrl = '//mockjs.jd.com';

const _fetch = (url, method, data = {}, opt = {}, commit = null) => {
    if (commit) commit('START_LOADING');
    let _url = _baseUrl + url;
        // let _url = url
    let promise = null;
    if (method == 'get') {
        promise = vue.http.get(_url, opt);
    } else if (method == 'post') {
        promise = vue.http.post(_url, data, opt);
    } else if (method == 'jsonp') {
        promise = vue.http.jsonp(_url, opt);
    }
    return promise.then((res) => {
        if (commit) commit('FINISH_LOADING');
        if (res.data.resp_h.code == 200) {
            return Promise.resolve(res.data.resp_b);
        } else {
            return Promise.reject(res.data.resp_h);
        }
    }).catch((err) => {
        return Promise.reject(err);
    });
};