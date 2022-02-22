import { useState, useEffect } from 'react';
import { usePurchaseContext } from 'contexts/PurchaseContext';


import './GreenPurchasesCircle.scss';
const GreenPurchasesCircle = () => {

    const { orgPurchases } = usePurchaseContext();
    const [greenPurchases, setGreenPurchases] = useState('?');

    useEffect(() => {
        if(!orgPurchases) { return };

        const greenPurchasesToBuy = orgPurchases.filter(p => {
            if(!p.bought && p.priority.toLowerCase() === "later") {
                return p;
            }
        })

        setGreenPurchases(greenPurchasesToBuy.length)
    }, [orgPurchases]);

    if(greenPurchases === 0) { return null }

    return (
        <section className="green-purchases-circle">
            <div className="green-circe">
                {greenPurchases}
            </div>
        </section>
    )
}

export default GreenPurchasesCircle;