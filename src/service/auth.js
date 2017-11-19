import {AsyncStorage} from "react-native";
import axios from "axios";
import Concert from "concert";

class authService {

    http;
    token;
    e = {};

    constructor() {
        this.http = new axios.create({
            baseURL: `${axios.defaults.baseURL}/ajax`
        });
        Object.assign(this.e, Concert);
    }

    async init() {

        this.token = await AsyncStorage.getItem('token');
        if (this.token) axios.defaults.headers.common['Authorization'] = `Token ${this.token}`;
    }

    isReady = this.init();

    async login(username, password) {
        let res = await this.http.post(`/api_token_auth/`, {username, password});
        let token = res.data.token;

        if (token) {
            await AsyncStorage.setItem('token', token);
            this.token = token;
        }

        return res;
    }
}

export default new authService();
