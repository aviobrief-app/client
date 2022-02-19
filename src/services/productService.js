import * as requester from 'services/requester';
import * as api from 'services/api';
import { storage, storageRef, uploadBytes, getDownloadURL } from 'config/firebaseStorage';
import { appDateTime } from 'config/dateTime';


import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';


export const getAvailableProductPackages = async () => {
    try {
        const result = await requester.get(api.getAvailableProductPackages());

        if(result.errors || result.error) { throw (result.message || 'Get available product packages failed!'); }

        return Promise.resolve(result);

    } catch(err) {
        return Promise.reject(err);
    }
}

export const addProduct = async (inputValues) => {
    try {
        await requester.validateOnline();

        /*  1. Save the image to Firebase Storage:
                - create reference to the firebase storage for the image;
                - await the image upload;
                - get download url to send to the server.
        */
        const firebaseStorageRef = storageRef(storage, `productImages/${inputValues.image.name}_${appDateTime().toMillis()}`);

        await uploadBytes(firebaseStorageRef, inputValues.image);
        const uploadedImageUrl = await getDownloadURL(firebaseStorageRef);

        /* 2. Modify inputValues with image url instead of file */
        inputValues.image = uploadedImageUrl;

        const result = await requester.post(api.addProduct(), inputValues);

        if(result.errors || result.error) { throw (result.message || 'Product add fail!') }

        return Promise.resolve(result);

    } catch(err) {
        return Promise.reject(err);
    }
}



