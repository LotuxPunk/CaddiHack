import Axios from 'axios';

Axios.defaults.baseURL = "https://cyberrubberducks-webapps.azurewebsites.net/api/";
Axios.interceptors.request.use(async function(config) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    return config;
}, function(error) {
    console.log(error);
    return Promise.reject(error);
})