import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:6379'
});

export default instance;
