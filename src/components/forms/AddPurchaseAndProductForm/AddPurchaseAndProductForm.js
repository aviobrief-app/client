import { useState, useEffect } from 'react';

import useCurrentUserClaims from 'hooks/useCurrentUserClaims';
import { useYupValidation } from 'hooks/useYupValidation';
import { addProductFormSchema } from './validations/addProductFormSchema';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';
import { usePurchaseContext } from 'contexts/PurchaseContext';
import * as toaster from 'utils/notifyingUX/toaster';
import { toastMessages } from 'utils/notifyingUX/UXmessages';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';
import CheckboxItem from 'components/shared/CheckboxItem/CheckboxItem';
import Label from 'components/shared/Label/Label';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import SelectionSlider from 'components/SelectionSlider/SelectionSlider';
import ProductImageUpload from 'components/ProductImageUpload/ProductImageUpload';
import ProductPackageDropdownInput from 'components/ProductPackageDropdownInput/ProductPackageDropdownInput';
import QuantityNumericInput from 'components/inputs/QuantityNumericInput/QuantityNumericInput';

import * as productService from 'services/productService';

import Loading from 'components/shared/Loading/Loading';
import './AddPurchaseAndProductForm.scss';
const AddPurchaseAndProductForm = () => {

    const { contextSetDisplayModal } = useModalBackdropContext();

    const [inputValues, setInputValues] = useState({ priority: 'Now', image: null });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { validateForm } = useYupValidation();
    const [isLoading, setIsLoading] = useState(true);

    const [claimsAreLoading] = useCurrentUserClaims();
    const { addPurchaseAndProduct } = usePurchaseContext();
    const [productPackages, setProductPackages] = useState(null);


    useEffect(() => {
        if(!!productPackages && !claimsAreLoading) {
            setIsLoading(false);
        }
    }, [productPackages, claimsAreLoading])

    useEffect(() => {
        productService.getAvailableProductPackages()
            .then(res => setProductPackages(res))
            .catch(err => console.error(err))
    }, []);


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

                addPurchaseAndProduct(inputValues)
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
            .catch((err) => {
                setErrors(err);
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
                        <div className="package-input">
                            <ProductPackageDropdownInput
                                productPackages={productPackages}
                                publishInputValue={publishInputValue}
                            />
                        </div>
                    </div>
                    <section className="priority-and-quantity">
                        <div className="priority-input">
                            <Label text={'Priority:'} />
                            <SelectionSlider
                                choices={['Now', 'Later']}
                                publishInputValue={publishInputValue}
                                inputValues={inputValues}
                            />
                        </div>
                        <div className="quantity-input">
                            <Label text={'Qty:'} />
                            <QuantityNumericInput
                                width={'59px'}
                                height={'42px'}
                                minValue={1}
                                maxValue={10}
                                publishInputValue={publishInputValue}
                            />
                        </div>
                    </section>
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

export default AddPurchaseAndProductForm;