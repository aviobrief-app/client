import { useState } from 'react';
import { usePurchaseContext } from 'contexts/PurchaseContext';

import { ReactComponent as CheckboxSelected } from './assets/CheckboxSelected.svg';
import { ReactComponent as CheckboxNotSelected } from './assets/CheckboxNotSelected.svg';


import * as toaster from 'utils/notifyingUX/toaster';
import { consoleMessages, toastMessages } from 'utils/notifyingUX/UXmessages';

import './CheckboxItemCircle.scss';
const CheckboxItemCircle = ({
    purchaseId,
    isBought,
}) => {

    const { buyPurchase, rejectBoughtPurchase } = usePurchaseContext();

    const buyPurchaseHandler = () => {
        buyPurchase(purchaseId)
            .catch(() => toaster.toastSuccess(toastMessages.PURCHASE_BUY_FAIL))
    }

    const rejectBoughtPurchaseHandler = () => {
        rejectBoughtPurchase(purchaseId)
            .catch(() => toaster.toastSuccess(toastMessages.PURCHASE_UN_BUY_FAIL))
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