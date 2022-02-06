import * as requester from 'services/requester';
import * as api from 'services/api';

import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';


export const addProduct = async (data) => {
    try {
        const result = await requester.post(api.addProduct(), data);
        return Promise.resolve(result);
    } catch(err) {
        return Promise.reject(err);
    }
}