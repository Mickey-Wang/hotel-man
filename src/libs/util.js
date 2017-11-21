import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - 国内酒店管理系统' : '国内酒店管理系统';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    // 'http://trip.hotel.man.net' :
    'http://mock.jd.hk/mock/59e9b5bbf5448721d22c84de/hotelman':
    env === 'production' ?
    // '//mock.jd.hk/mock/59e9b5bbf5448721d22c84de/hotelman' :
    'http://trip.hotel.man.net' :
    'https://man.hotel.jd.com';

util.ajax = axios.create({
    // baseURL: ajaxUrl,
    timeout: 30000
});

export default util;