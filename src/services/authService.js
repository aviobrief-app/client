import jwt_decode from "jwt-decode";
import * as requester from 'services/requester';
import * as api from 'services/api';


export const login = async () => {
    try {
        const result = await requester.get(api.login());
        if(!result.ok) { throw result }
        return result;
    } catch(err) {
        console.log('[authService.js] login failed!');
        return err.message ? err.message : 'Login failed!';
    }
}

export const loginJWT = async (data) => {
    try {
        const result = await requester.post(api.loginAuth(), data);
        if(!result.accessToken) { throw result }
        sessionStorage.setItem('ACCESS_TOKEN', result.accessToken);
        const decodedJwt = jwt_decode(result.accessToken);

        return decodedJwt;
    } catch(err) {
        console.log(JSON.parse(err.errors[0].rejectedValue));
        return err.message ? err.message : 'Login auth failed!';
    }
}

export const getFirstPartyCookie = async () => {
    try {
        const result = await requester.get(api.firstPartyCookie());
        return result;
    } catch(err) {
        return err.message ? err.message : 'Get FPC failed!';
    }
}

export const getToken = () => {
    try {
        let token = 'Bearer ' + sessionStorage.getItem('ACCESS_TOKEN');
        return token;
    } catch(err) {
        console.log('[authService.js] getToken() failed!');
    }
};

export const getCsrfToken = () => {
    try {
        let csrfToken = sessionStorage.getItem('x-csrf-token');
        console.log(csrfToken);
        return csrfToken;
    } catch(err) {
        console.log('[authService.js] getCsrfToken() failed!');
    }
};