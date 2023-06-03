import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status == 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }

        throw error;
    }
);

export default axiosClient;
