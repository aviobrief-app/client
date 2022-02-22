import * as requester from 'services/requester';
import * as api from 'services/api';

export const buyOrganizationPurchase = async (organizationId, purchaseId) => {
    try {
        const result = await requester.patch(api.buyOrganizationPurchase(organizationId, purchaseId));

        if(result.errors || result.error) { throw (result.message || 'Buy purchase failed!'); }

        return Promise.resolve(result);

    } catch(err) {
        return Promise.reject(err);
    }
}

export const rejectOrganizationPurchase = async (organizationId, purchaseId) => {
    try {
        const result = await requester.patch(api.rejectOrganizationPurchase(organizationId, purchaseId));

        if(result.errors || result.error) { throw (result.message || 'Buy purchase failed!'); }

        return Promise.resolve(result);

    } catch(err) {
        return Promise.reject(err);
    }
}