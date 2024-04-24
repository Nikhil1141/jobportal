import axios from 'axios';
const API_URL = 'http://localhost:8800/api-v1';

export const API = axios.create({
    baseURL: API_URL,
    responseType: 'json',
});

export const apiRequest = async ({ url, method, data }) => {
    try {
        const response = await API({
            url,
            method,
            data,
        });
        return response;
    } catch (error) {
        console.error('Error in apiRequest: ', error);
    }
}

// export const handleFileUpload = async (uploadFile) => {

// }