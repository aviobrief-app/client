import * as requester from 'services/requester';
import * as api from 'services/api';
import { storage, storageRef, uploadBytes, getDownloadURL, deleteObject } from 'config/firebaseStorage';


import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';


export const addProduct = async (inputValues) => {
    try {
        /* create reference to the firebase storage for the image */
        const firebaseStorageRef = storageRef(storage, `productImages/${inputValues.image.name}`);
        console.log(firebaseStorageRef);


        const result = await requester.post(api.addProduct(), inputValues);
        return Promise.resolve(result);
    } catch(err) {
        return Promise.reject(err);
    }
}