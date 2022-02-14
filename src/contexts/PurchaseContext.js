import React, { useState, useContext, useEffect } from 'react';
import { useDBContextService } from 'hooks/useDBContextService';

import * as productService from 'services/productService';

const PurchaseContext = React.createContext();

export const usePurchaseContext = () => {
    return useContext(PurchaseContext);
};

export const PurchaseContextProvider = (
    { children }
) => {


    /* DATA */
    const [appPurchases, setAppPurchases] = useState(null);

    const globalData = {
        appPurchases,
        setAppPurchases,
    }

    return (
        <PurchaseContext.Provider value={globalData}>
            {children}
        </PurchaseContext.Provider>
    )
}
