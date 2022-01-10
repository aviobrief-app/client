import * as authService from 'services/authService';

const request = async (method, url, data) => {
    let token = await authService.getToken();
    // console.log(`[request.js] token: ${token}`);

    //this will add token to the request, if there is logged in user
    let options = {
        method,
        headers: {
            ...(token ? { Authorization: token } : {}),
        },

    };

    //this will add header and body to the request if we pass any data object to the requester
    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then((res) => res.json());
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');
