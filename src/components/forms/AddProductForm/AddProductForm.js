
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import { ReactComponent as ProductPictureElement } from 'assets/svg/ProductPictureElement.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';

import './AddProductForm.scss';
const AddProductForm = () => {
    const { contextSetDisplayModal } = useModalBackdropContext();


    const onCloseButtonClick = () => {
        contextSetDisplayModal(false);
    }
    return (
        <form className="add-product-form" >
            <div className="form-header">
                <CloseButtonPink onClick={onCloseButtonClick} />
            </div>
            <section className="form-content">
                <ProductPictureElement />
            </section>
            <div className="form-footer">
                <ButtonFilled
                    width="120px"
                    height="40px"
                    url="/add-product"
                    text="Add"
                    fontSize="20px"
                    fontWeight="400"
                    letterSpacing="2.5px"
                />
            </div>
        </form>
    )
}

export default AddProductForm;