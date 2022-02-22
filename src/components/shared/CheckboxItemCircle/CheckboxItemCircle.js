import { useState } from 'react';
import { usePurchaseContext } from 'contexts/PurchaseContext';

import { ReactComponent as CheckboxSelected } from './assets/CheckboxSelected.svg';
import { ReactComponent as CheckboxNotSelected } from './assets/CheckboxNotSelected.svg';


import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';
import * as loadingUX from 'utils/loadingUX/loadingUX';

import './CheckboxItemCircle.scss';
const CheckboxItemCircle = ({
    purchaseId,
    isBought,
}) => {

    const { buyPurchase, rejectBoughtPurchase } = usePurchaseContext();

    const buyPurchaseHandler = () => {
        loadingUX.dimScreenIn();
        buyPurchase(purchaseId)
            .then(() => loadingUX.dimScreenOut())
            .catch(() => {
                loadingUX.dimScreenOut();
                toaster.toastSuccess(toastMessages.PURCHASE_BUY_FAIL);
            })
    }

    const rejectBoughtPurchaseHandler = () => {
        loadingUX.dimScreenIn();
        rejectBoughtPurchase(purchaseId)
            .then(() => loadingUX.dimScreenOut())
            .catch(() => {
                loadingUX.dimScreenOut();
                toaster.toastSuccess(toastMessages.PURCHASE_REJECT_FAIL);
            })
    }

    return (
        <section className="checkbox-item-circle" >
            {isBought
                ?
                <CheckboxSelected onClick={rejectBoughtPurchaseHandler} />
                :
                <CheckboxNotSelected onClick={buyPurchaseHandler} />
            }

        </section>
    )
}

export default CheckboxItemCircle;