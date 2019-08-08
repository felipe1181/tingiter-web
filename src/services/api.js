import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3333'
});
api.defaults.timeout = 500;//TIMEOUT 500Ms
export default api;