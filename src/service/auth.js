import {AsyncStorage} from "react-native";
import axiosBase from "axios";

let axios;

export default class {
    constructor() {
        axios = new axiosBase.create({
            baseURL: `${axiosBase.defaults.baseURL}/ajax`
        });
    }

    async login(username, password) {
        let res = await axios.post(`/api_token_auth/`, {username, password});
        let token = res.data.token;

        if (token) await AsyncStorage.setItem('token', token);

        return res;
    }
}
