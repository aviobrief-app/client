import { useState } from 'react';

import useCurrentUserClaims from 'hooks/useCurrentUserClaims';
import { useYupValidation } from 'hooks/useYupValidation';
import { addProductFormSchema } from './validations/addProductFormSchema';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';
import * as toaster from 'utils/notifyingUX/toaster';
import { toastMessages } from 'utils/notifyingUX/UXmessages';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';
import CheckboxItem from 'components/shared/CheckboxItem/CheckboxItem';
import Label from 'components/shared/Label/Label';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import SelectionSlider from 'components/shared/SelectionSlider/SelectionSlider';
import ProductImageUpload from 'components/ProductImageUpload/ProductImageUpload';

import * as productService from 'services/productService';

import './AddProductForm.scss';
const AddProductForm = () => {

    const { contextSetDisplayModal } = useModalBackdropContext();
    const [inputValues, setInputValues] = useState({ priority: 'Now', image: null });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { validateForm } = useYupValidation();
    const [isLoading, currentUserClaims] = useCurrentUserClaims();

    const onCloseButtonClick = () => {
        contextSetDisplayModal(false);
    }

    const publishInputValue = (inputName, value) => {
        setInputValues((inputValues) => ({
            ...inputValues,
            [inputName]: value,
        }));
    };


    const onAddProductClick = (e) => {
        e.preventDefault();

        validateForm(addProductFormSchema, inputValues)
            .then(() => {

                const type = inputValues.image.type;
                if(!(type === "image/jpeg" || type === "image/bmp" || type === "image/png")) { throw new Error('Image type invalid!') }

                setErrors({});

                productService.addProduct(inputValues)
                    .then((result) => {
                        setIsSubmitted(true);
                        toaster.toastSuccess(toastMessages.PRODUCT_ADD_OK);
                        contextSetDisplayModal(false);
                    })
                    .catch(err => {
                        err.message
                            ? toaster.toastWarning(err.message)
                            : toaster.toastWarning(toastMessages.PRODUCT_ADD_FAIL)
                        // loadingUX.dimScreenOut();
                        // console.log(err);
                    });
            })
            .catch((errors) => {
                setErrors(errors);
                toaster.toastWarning(toastMessages.MISSING_REQUIRED_FORM_DATA);
                // loadingUX.dimScreenOut();
            });
    }


    return (
        !isLoading && <form className="add-product-form" >
            <div className="form-header">
                <CloseButtonPink onClick={onCloseButtonClick} />
            </div>
            <section className="form-content">
                <ProductImageUpload
                    publishInputValue={publishInputValue}
                />
                <div className="form-content-middle">
                    <div className="name-input">
                        <Label text={'Name:'} />
                        <div className="input-container">
                            <InputWithCustomPlaceholder
                                name="productName"
                                placeholder={'ex: vinegar'}
                                publishInputValue={publishInputValue}
                                globalValidationError={errors.productName}
                                hasHideIcon={false}
                                isSubmitted={isSubmitted}
                                validations={addProductFormSchema}
                            />
                        </div>
                    </div>
                    <div className="priority-input">
                        <Label text={'Priority:'} />
                        <SelectionSlider
                            choices={['Now', 'Later', 'Archive']}
                            publishInputValue={publishInputValue}
                            inputValues={inputValues}
                        />
                    </div>
                    <div className="exact-input">
                        <CheckboxItem label='exactBrand' publishInputValue={publishInputValue} />
                        <Label className="exact-input-label" text={'Exact brand'} fontSize='18px' />
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
                    onClick={onAddProductClick}
                />
            </div>
        </form>
    )
}

export default AddProductForm;