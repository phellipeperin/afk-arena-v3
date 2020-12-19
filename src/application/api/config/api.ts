import axios from 'axios';

const api = axios.create();

export default {
    get(url: string) {
        return api.get(url);
    },
    post(url: string, data: any) {
        return api.post(url, data);
    },
    put(url: string, data: any) {
        return api.put(url, data);
    },
    delete(url: string) {
        return api.delete(url);
    },
};
