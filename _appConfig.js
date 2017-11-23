import axios from 'axios'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
axios.defaults.baseURL = 'http://localhost:8148';
