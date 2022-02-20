
import PictureElement from 'components/shared/PictureElement/PictureElement';
import { getPackageDisplayName } from './helper/getPackageDisplayName'

import './PurchaseCard.scss';
const PurchaseCard = ({
    purchase,
    product,

}) => {

    console.log(getPackageDisplayName(product.productPackage));
    return (
        <section className="purchase-card">
            <PictureElement
                size={'70px'}
                isArchived={false}
                priority={purchase.priority}
                imageUrl={product.image}
            />
            <section className="purchase-product-info">
                <div className="name">{product.productName}</div>
                <div className="quantity-info">
                    <p className="quantity">{purchase.quantity}</p>
                    <p className="package">{getPackageDisplayName(product.productPackage)}</p>
                </div>
            </section>
        </section>
    )
}

export default PurchaseCard;