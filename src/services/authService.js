import jwt_decode from "jwt-decode";
import * as requester from 'services/requester';
import * as api from 'services/api';

import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';


const ACCESS_TOKEN = 'ACCESS-TOKEN';
const X_CSRF_TOKEN = 'x-csrf-token';

export const registerOrganizationOwner = async (data) => {
    try {
        const result = await requester.post(api.registerOrganizationOwner(), data);
        if(!result.owner || !result.organization) { throw result }
        return Promise.resolve(result);
    } catch(err) {
        return Promise.reject(err);
    }
}

export const loginJWT = async (data) => {
    try {
        const deviceLocation = await fetchDeviceLocationIp();
        sessionStorage.setItem('device-location-ip', deviceLocation);

        const result = await requester.post(api.loginAuth(), data);
        if(!result.accessToken) { throw result }

        sessionStorage.setItem(ACCESS_TOKEN, result.accessToken);
        const decodedJwt = jwt_decode(result.accessToken);

        return Promise.resolve(decodedJwt);
    } catch(err) {
        return Promise.reject(err);
    }
}

export const logout = async (data) => {
    try {
        const result = await requester.post(api.logout(), data);
        if(!result.ok) { throw result }
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem('x-csrf-token');
        sessionStorage.removeItem('device-location-ip');

        toaster.toastSuccess(toastMessages.LOGOUT_OK);
        return result;
    } catch(err) {
        return err.message ? err.message : 'Logout failed!';
    }
}

export const getToken = () => {
    try {
        let token = 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN);
        return token;
    } catch(err) {
        logger.logWarning(consoleMessages.GET_AUTH_TOKEN_FAIL);
    }
};

export const getCsrfToken = () => {
    try {
        let csrfToken = sessionStorage.getItem(X_CSRF_TOKEN);
        return csrfToken;
    } catch(err) {
        logger.logWarning(consoleMessages.GET_CSRF_TOKEN_FAIL);
    }
};

const fetchDeviceLocationIp = async () => {
    try {
        const response = await fetch('https://geolocation-db.com/json/');
        const geoData = await response.json();
        const { IPv4 } = geoData;
        return IPv4;
    } catch(err) {
        logger.logWarning(consoleMessages.FETCH_DEVICE_LOCATION_IP_FAIL);
    }
};

export const getLocationIp = () => {
    try {
        let deviceLocationIp = sessionStorage.getItem('device-location-ip');
        return deviceLocationIp;
    } catch(err) {
        logger.logWarning(consoleMessages.GET_DEVICE_LOCATION_IP_FAIL);
    }
};


/*

export const getFirstPartyCookie = async () => {
    try {
        const result = await requester.get(api.firstPartyCookie());
        return result;
    } catch(err) {
        return err.message ? err.message : 'Get FPC failed!';
    }
}

*/