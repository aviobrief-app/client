
import PictureElement from 'components/shared/PictureElement/PictureElement';

import './PurchaseCard.scss';
const PurchaseCard = ({
    priority,
    product,

}) => {
    return (
        <section className="purchase-card">
            <PictureElement
                size={'70px'}
                isArchived={false}
                priority={priority}
                imageUrl={product.image}
            />
        </section>
    )
}

export default PurchaseCard;