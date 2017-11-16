import axiosBase from "axios";

let axios;

export default class {
    constructor() {
        console.log(JSON.stringify(axiosBase.defaults));
        console.log(axiosBase.defaults.baseURL);
        axios = new axiosBase.create({
            baseURL: `${axiosBase.defaults.baseURL}/django_web_chat`
        });
    }

    async fetchRoomsList() {
        let res = await axios.get('/rooms/');
        return res.data;
    }

    async fetchMessages(room_id, from_id, message_count = 20) {
        let res = await axios.post(`/rooms/${room_id}/messages/get/`, {
            message_count, from_id
        });
        return res.data;
    }
}
