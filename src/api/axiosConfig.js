import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/api/builds',
    headers: { "ngrok-skip-browser-warning": "true" }
})