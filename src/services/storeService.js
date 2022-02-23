import * as requester from 'services/requester';
import * as api from 'services/api';


import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';


export const getAvailableStores = async () => {
    try {
        const result = await requester.get(api.getAvailableStores());

        if(result.errors || result.error) { throw (result.message || 'Get available stores failed!'); }

        return Promise.resolve(result);

    } catch(err) {
        return Promise.reject(err);
    }
}
