import React, { useState, useContext, useEffect } from 'react';
import { useDBContextService } from 'hooks/useDBContextService';
import { useAuth } from 'contexts/AuthContext';

import * as organizationService from 'services/organizationService';
import * as logger from 'utils/notifyingUX/logger';
import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';

const PurchaseContext = React.createContext();
export const usePurchaseContext = () => { return useContext(PurchaseContext) };

export const PurchaseContextProvider = (
    { children }
) => {

    const { currentUserClaims } = useAuth();
    const [fetchPurchaseDataByRole] = useDBContextService();

    /* DATA */
    const [orgPurchases, setOrgPurchases] = useState(null);

    useEffect(() => {
        refreshDataFromDB();
    }, [])

    const refreshDataFromDB = () => {
        fetchPurchaseDataByRole(currentUserClaims)
            .then(([orgPurchases]) => {
                setTimeout(() => { setOrgPurchases(orgPurchases) }, 1000);
            })
            .catch((err) => {
                console.log(err);
                logger.logWarning(consoleMessages.ORG_PURCHASE_DATA_LOAD_FAIL);
                toaster.toastWarning(toastMessages.ORG_PURCHASE_DATA_LOAD_FAIL);
            })
    }

    const globalData = {
        orgPurchases,
        setOrgPurchases,
    }

    return (
        <PurchaseContext.Provider value={globalData}>
            {children}
        </PurchaseContext.Provider>
    )
}
