import axios from 'axios'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
axios.defaults.baseURL = 'http://192.168.42.171:8229';
