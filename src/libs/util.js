import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - 国内酒店管理系统' : '国内酒店管理系统';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://mockjs.jd.com/hotel/man/' :
    env === 'production' ?
    'https://man.hotel.jd.com' :
    'https://man.hotel.jd.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;