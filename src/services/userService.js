import * as requester from 'services/requester';
import * as api from 'services/api';

export const getAllUsers = async () => {
    try {
        const result = await requester.get(api.getAllUsers());
        if(!result.length) { throw result }
        return result;
    } catch(err) {
        console.log(JSON.parse(err.errors[0].rejectedValue));
        throw err;
    }

};