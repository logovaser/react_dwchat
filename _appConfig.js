import axios from 'axios'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
axios.defaults.baseURL = 'http://192.168.42.243:8229';

axios.interceptors.response.use(
    response => response,
    error => {
        alert(JSON.stringify(error));
        return Promise.reject(error);
    }
);
