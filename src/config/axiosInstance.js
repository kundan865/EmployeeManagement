import  axios from 'axios'

const api = axios.create({
    baseURL: 'https://694cd63cda5ddabf00379a81.mockapi.io/',
    timeout: 5000,
    headers: { 
        'Authorization': 'Bearer YOUR_TOKEN' 
    }
});

export default api;