import axiosBase from "axios";

export default class {

    http;

    constructor() {
        console.log(JSON.stringify(axiosBase.defaults));
        console.log(axiosBase.defaults.baseURL);
        this.http = new axiosBase.create({
            baseURL: `${axiosBase.defaults.baseURL}/django_web_chat`
        });
    }

    async fetchRoomsList() {
        let res = await this.http.get('/rooms/');
        return res.data;
    }

    async fetchMessages(room_id, from_id, message_count = 20) {
        let res = await this.http.post(`/rooms/${room_id}/messages/get/`, {
            message_count, from_id
        });
        return res.data;
    }
}
