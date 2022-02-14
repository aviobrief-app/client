
const fetchProductDataByRoles = async (currentUserClaims) => {

    try {

        let appAllProducts = [];
        let appOrganizationProducts = [];

        console.log(`Could not fetch products data for user with role ${currentUserClaims.role}`);
        return [appAllProducts, appOrganizationProducts]

    } catch(err) {
        throw err;
    }
}

export const useDBContextService = () => {
    return [fetchProductDataByRoles,];
}

