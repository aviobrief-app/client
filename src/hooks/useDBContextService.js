import * as organizationService from 'services/organizationService';

const fetchPurchaseDataByRole = async (currentUserClaims) => {

    try {

        let orgPurchases = [];

        // fetch the data from DB
        const DBorgPurchases = await organizationService.getOrganizationPurchases(currentUserClaims.organizationId);

        //modify data for application use
        if(DBorgPurchases.length > 0) { orgPurchases = DBorgPurchases }

        return [orgPurchases]

    } catch(err) {
        console.log(`Could not fetch products data for user with role ${currentUserClaims.role}`);
        throw err;
    }
}

export const useDBContextService = () => {
    return [fetchPurchaseDataByRole,];
}

