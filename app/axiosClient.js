import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': 0
    }
});