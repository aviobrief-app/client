import { useState } from 'react';
import PictureElement from 'components/shared/PictureElement/PictureElement';
import ColoredTag from 'components/shared/ColoredTag/ColoredTag';
import CheckboxItemCircle from 'components/shared/CheckboxItemCircle/CheckboxItemCircle';
import { getPackageDisplayName } from './helper/getPackageDisplayName';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


import './PurchaseCard.scss';
const PurchaseCard = ({
    purchase,
    product,
}) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const onProductPictureClick = () => {
        setOpen(true)
    };

    const PictureDialog = (props) => {
        const { open } = props;

        return (
            <Dialog open={open}>
                <div className="product-picture-big">
                    <img src={product.image} alt="" />
                </div>
            </Dialog>
        );
    }

    return (
        <section className="purchase-card">
            {purchase.bought
                ? <div className="purchase-bought-dimmer">

                </div>

                : null
            }
            <section className="left-section">
                <PictureElement
                    size={'70px'}
                    isArchived={false}
                    priority={purchase.priority}
                    imageUrl={product.image}
                    onClick={onProductPictureClick}
                />
                <PictureDialog
                    open={open}
                    onClose={handleClose}
                />
                <section className="purchase-product-info">
                    <div className="name">{product.productName}</div>
                    <div className="quantity-info">
                        <p className="quantity">{purchase.quantity}</p>
                        <p className="package">
                            {getPackageDisplayName(product.productPackage, purchase.quantity)}
                        </p>
                    </div>
                    <section className="labels-row">
                        <div className="store">
                            {(!purchase.store || purchase.store.name === '' || purchase.store.name === 'ANY STORE')
                                ? <ColoredTag
                                    text={'всички'}
                                    backgroundColor={'#21C097'}
                                    fontSize={'14px'}
                                />
                                : <ColoredTag
                                    className="store-name"
                                    text={purchase.store.name}
                                    backgroundColor={'#FD9727'}
                                    fontSize={'14px'}

                                />
                            }
                        </div>
                        <div className="exact">
                            {purchase.exactBrand
                                ? <ColoredTag
                                    text={'EXACT'}
                                    backgroundColor={'#E2208A'}
                                    fontSize={'14px'}
                                />
                                : <ColoredTag
                                    text={'EMPTY'}
                                    backgroundColor={'#fff'}
                                    fontSize={'14px'}
                                />
                            }
                        </div>


                    </section>


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