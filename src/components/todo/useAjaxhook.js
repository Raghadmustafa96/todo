import axios from 'axios';

export default function useAjax(obj) {
    return axios[obj.method](obj.url, obj.body)
}