import * as requester from 'services/requester';
import * as api from 'services/api';

export const getAllUsers = () => {
    return requester.get(api.getAllUsers())
        .then(res => { return res })
        .catch(err => { return err });
};