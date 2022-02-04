
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import './AddProductForm.scss';
const AddProductForm = () => {
    const { contextSetDisplayModal } = useModalBackdropContext();


    const onCloseButtonClick = () => {
        contextSetDisplayModal(false);
    }
    return (
        <div onClick={onCloseButtonClick}>
            add product
        </div>
    )
}

export default AddProductForm;