import axios from 'axios';    
    
const BASE_URL = process.env.API_URL || 'http://localhost:9119';    
    
async function request(route: string, data={}, method='GET'): Promise<any> {    
    //const token = localStorage.getItem('token');    
    let resp_data: Record<string, unknown>;    
    resp_data = {};    
    let config = {};    
    /*if (token !== undefined) {    
        config = {    
            headers: {    
                "Authorization": `Bearer ${token}`    
            },    
            params: data,    
        };    
    }   */ 
    if (method === 'GET') {    
        resp_data = (await axios.get(`${BASE_URL}${route}`, config)).data;    
    }
    else if (method === 'POST') {
        resp_data = (await axios.post(`${BASE_URL}${route}`, {}, {params: data})).data;    
    }    
    return resp_data;    
}    
    
    
export default request;