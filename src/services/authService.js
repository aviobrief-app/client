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
        if(!result.ok) { throw result }
        return result;
    } catch(err) {
        console.log('[authService.js] login auth failed!');
        return err.message ? err.message : 'Login auth failed!';
    }
}

export const getToken = () => {
    try {
        let token = 'Basic ' + window.btoa("petar.petkov@mailinator.com" + ":" + "111111");
        return token;
    } catch(err) {
        console.log('[authService.js] getToken() failed!');
    }
};