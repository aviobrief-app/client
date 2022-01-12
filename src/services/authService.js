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
        console.log('[authService.js] login auth failed!');
        return err.message ? err.message : 'Login auth failed!';
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