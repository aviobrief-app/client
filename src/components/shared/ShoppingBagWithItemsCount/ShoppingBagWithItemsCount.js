

import { ReactComponent as ShoppingBagWhite } from 'assets/svg/ShoppingBagWhite.svg';
import RedPurchasesCircle from '../RedPurchasesCircle/RedPurchasesCircle';
import GreenPurchasesCircle from '../GreenPurchasesCircle/GreenPurchasesCircle';

import './ShoppingBagWithItemsCount.scss';
const ShoppingBagWithItemsCount = () => {
    return (
        <section className="shopping-bag-with-items-count">
            <ShoppingBagWhite className="shopping-bag-white" />
            <div className="shopping-bag-red-circle">
                <RedPurchasesCircle />
            </div>
            <div className="shopping-bag-green-circle">
                <GreenPurchasesCircle />
            </div>
        </section>
    )
}


export default ShoppingBagWithItemsCount;