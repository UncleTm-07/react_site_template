import axios from "axios";

export const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

$host.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

