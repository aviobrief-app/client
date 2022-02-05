import { useState } from 'react';

import { useYupValidation } from 'hooks/useYupValidation';
import { addProductFormSchema } from './validations/addProductFormSchema';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import { ReactComponent as TakePhoto } from 'assets/svg/TakePhoto.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';
import Label from 'components/shared/Label/Label';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';

import './AddProductForm.scss';
const AddProductForm = () => {

    const { contextSetDisplayModal } = useModalBackdropContext();
    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onCloseButtonClick = () => {
        contextSetDisplayModal(false);
    }

    const publishInputValue = (inputName, value) => {
        setInputValues((inputValues) => ({
            ...inputValues,
            [inputName]: value,
        }));
    };
    return (
        <form className="add-product-form" >
            <div className="form-header">
                <CloseButtonPink onClick={onCloseButtonClick} />
            </div>
            <section className="form-content">
                <TakePhoto />
                <div className="form-content-middle">
                    <div className="name-input">
                        <Label text={'Name:'} />
                        <div className="input-container">
                            <InputWithCustomPlaceholder
                                name="productName"
                                placeholder={'ex: vinegard'}
                                publishInputValue={publishInputValue}
                                globalValidationError={errors.productName}
                                hasHideIcon={true}
                                isSubmitted={isSubmitted}
                                validations={addProductFormSchema}
                                type={'text'}
                            />
                        </div>
                    </div>
                    <div className="priority-input">
                        <Label text={'Priority:'} />
                    </div>
                    <div className="exact-input">
                        <Label text={'Exact brand'} />
                    </div>
                    <div className="add-to-cart-input">
                        <Label text={'Add to cart'} />
                    </div>

                </div>
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