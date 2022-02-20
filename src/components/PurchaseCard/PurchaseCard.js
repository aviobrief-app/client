
import PictureElement from 'components/shared/PictureElement/PictureElement';
import ColoredTag from 'components/shared/ColoredTag/ColoredTag';
import CheckboxItemCircle from 'components/shared/CheckboxItemCircle/CheckboxItemCircle';
import { getPackageDisplayName } from './helper/getPackageDisplayName';

import './PurchaseCard.scss';
const PurchaseCard = ({
    purchase,
    product,

}) => {

    return (
        <section className="purchase-card">

            <section className="left-section">
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
                        <p className="package">
                            {getPackageDisplayName(product.productPackage, purchase.quantity)}
                        </p>
                    </div>
                    {purchase.exactBrand
                        ?
                        <ColoredTag
                            text={'EXACT'}
                            backgroundColor={'#E2208A'}
                            fontSize={'14px'}
                        />
                        :
                        <ColoredTag
                            text={'EMPTY'}
                            backgroundColor={'#fff'}
                            fontSize={'14px'}
                        />


                    }

                </section>
            </section>

            <section className="right-section">
                <CheckboxItemCircle
                    isBought={purchase.bought}
                    purchaseId={purchase._id}
                />

            </section>
        </section>
    )
}

export default PurchaseCard;