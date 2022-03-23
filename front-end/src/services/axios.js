import _axios from 'axios';
import envConfig from '../config';

const axios = _axios.create({
    baseURL: envConfig.servicePath
})

export default axios;