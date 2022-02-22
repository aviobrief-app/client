import { useState, useEffect } from 'react';
import { usePurchaseContext } from 'contexts/PurchaseContext';


import './RedPurchasesCircle.scss';
const RedPurchasesCircle = () => {

    const { orgPurchases } = usePurchaseContext();
    const [redPurchases, setRedPurchases] = useState('?');

    useEffect(() => {
        if(!orgPurchases) { return };

        const redPurchasesToBuy = orgPurchases.filter(p => {
            if(!p.bought && p.priority.toLowerCase() === "now") {
                return p;
            }
        })


        setRedPurchases(redPurchasesToBuy.length)
    }, [orgPurchases]);

    if(redPurchases === 0) { return null }

    return (
        <section className="red-purchases-circle">
            <div className="red-circe">
                {redPurchases}
            </div>
        </section>
    )
}

export default RedPurchasesCircle;