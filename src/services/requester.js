import * as authService from 'services/authService';

import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';

const request = async (method, url, data) => {
    let token = authService.getToken();
    const csrfToken = authService.getCsrfToken();
    const getLocationIp = await authService.getLocationIp();
    // console.log(`[request.js] token: ${token}`);

    //this will add token to the request, if there is logged in user
    let options = {
        method,
        withCredentials: true,
        headers: {
            ...(token ? { Authorization: token } : {}),
            ...(csrfToken ? { 'x-csrf-token': csrfToken } : {}),
            ...(getLocationIp ? { 'x-forwarded-for': getLocationIp } : {}),
        },
        credentials: 'include',

    };

    //this will add header and body to the request if we pass any data object to the requester
    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then(async (res) => {
        if(!authService.getCsrfToken()) {
            for(var pair of res.headers.entries()) {
                // console.log(pair);
                if(pair[0] === 'x-csrf-token') {
                    sessionStorage.setItem(pair[0], pair[1]);
                }
            }
        }
        return res.json();
    });
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');
export const validateOnline = async () => {
    try {
        await fetch('https://geolocation-db.com/json/');
    } catch(err) {
        logger.logError(consoleMessages.INTERNET_CONNECTION_LOST);
        toaster.toastError(toastMessages.INTERNET_CONNECTION_LOST);
        throw new Error(`${consoleMessages.INTERNET_CONNECTION_LOST}`);
    }
}
