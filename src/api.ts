import axios from 'axios';

const BASE_URL = process.env.API_URL || 'http://localhost:9119';

async function request(route: string, data = {}, method = 'GET', authorization = true): Promise<any> {
    const token = localStorage.getItem('token');
    let resp_data: Record<string, unknown>;
    resp_data = {};
    let config = {};
    if (token !== undefined && authorization) {
        config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: data,
        };
    } else {
        config = {
            params: data
        }
    }
    if (method === 'GET') {
        resp_data = (await axios.get(`${BASE_URL}${route}`, config)).data;
    }
    else if (method === 'POST') {
        resp_data = (await axios.post(`${BASE_URL}${route}`, {}, config)).data;
    }

    return resp_data;
}

async function login(username: string, password: string) {
    return (await axios.post(`${BASE_URL}/token`, {}, { params: { username, password } })).data;
}

async function register(username: string, password: string) {
    return (await axios.post(`${BASE_URL}/register`, {}, { params: { username, password } })).data;
}

export { request, login, register }
