import axios from "axios";
export const base_url = 'http://localhost:9000'

const httpConfig = {
    baseURL: base_url,
}

const axiosInstance = axios.create({
    ...httpConfig, headers: {
        'Content-Type': 'application/json'
    }
})


axiosInstance.interceptors.request.use(request => {
    return request
}, error => {
    const message = error.response?.data?.errors?.message || 'Unknown Error';
    const newError = new Error(message);
    return Promise.reject(newError);
})

axiosInstance.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error.response);
})

export default axiosInstance


