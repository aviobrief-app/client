
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';

import './AddProductForm.scss';
const AddProductForm = () => {
    const { contextSetDisplayModal } = useModalBackdropContext();


    const onCloseButtonClick = () => {
        contextSetDisplayModal(false);
    }
    return (
        <form className="add-product-form" onClick={onCloseButtonClick}>
            <div className="form-header">
                <CloseButtonPink onClick={onCloseButtonClick} />
            </div>
            <div className="form-footer">
                <ButtonFilled
                    width="120px"
                    height="40px"
                    url="/add-product"
                    text="Add"
                    fontSize="20px"
                    fontWeight="400"
                    letterSpacing="2.5px"
                    onClick={onCloseButtonClick}
                />
            </div>
        </form>
    )
}

export default AddProductForm;