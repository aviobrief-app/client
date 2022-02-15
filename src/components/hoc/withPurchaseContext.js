import { PurchaseContextProvider } from 'contexts/PurchaseContext';


const withPurchaseContext = (Component) => {

    return (
        <PurchaseContextProvider>
            {Component}
        </PurchaseContextProvider>
    )

};

export default withPurchaseContext;