import { useState } from 'react';

import { useYupValidation } from 'hooks/useYupValidation';
import { addProductFormSchema } from './validations/addProductFormSchema';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';
import Label from 'components/shared/Label/Label';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import SelectionSlider from 'components/shared/SelectionSlider/SelectionSlider';
import ProductImageUpload from 'components/ProductImageUpload/ProductImageUpload';

import * as productService from 'services/productService';

import './AddProductForm.scss';
const AddProductForm = () => {

    const { contextSetDisplayModal } = useModalBackdropContext();
    const [inputValues, setInputValues] = useState({ priority: 'Now' });
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


    const onAddProductClick = (e) => {
        e.preventDefault();
        console.log(inputValues);
        const formData = new FormData();
        formData.append('priority', inputValues.priority)
        formData.append('productName', inputValues.productName)
        formData.append('image', inputValues.image)


        productService.addProduct(inputValues)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }


    return (
        <form className="add-product-form" >
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
                        <Label text={'Exact brand'} fontSize='18px' />
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