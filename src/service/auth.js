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

    setAuthHeaders() {
        axios.defaults.headers.common['Authorization'] = `Token ${this.token}`;
    }

    async init() {
        this.token = await AsyncStorage.getItem('token');
        if (this.token) this.setAuthHeaders();
    }

    isReady = this.init();

    async login(form) {
        let res = await this.http.post(`/api_token_auth/`, form);
        let token = res.data.token;

        if (token) {
            await AsyncStorage.setItem('token', token);
            this.token = token;
            this.setAuthHeaders();
        }

        return res;
    }

    async logout() {
        this.token = '';
        await AsyncStorage.setItem('token', '');
    }
}

export default new authService();
