import { useState } from 'react';

import { useYupValidation } from 'hooks/useYupValidation';
import { addProductFormSchema } from './validations/addProductFormSchema';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import { ReactComponent as CloseButtonPink } from 'assets/svg/CloseButtonPink.svg';
import { ReactComponent as TakePhoto } from 'assets/svg/TakePhoto.svg';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';
import Label from 'components/shared/Label/Label';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import SelectionSlider from 'components/shared/SelectionSlider/SelectionSlider';

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

    const attachDisplayImageFunctionality = () => {

        const takePhotoSVG = document.getElementById("take-photo-svg");
        const chooseFile = document.getElementById("product-image-input");
        const imgPreview = document.getElementById("product-image-preview");

        chooseFile.addEventListener("change", function () {
            getImgData();
        });


        function getImgData() {
            const files = chooseFile.files[0];
            if(files) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function () {
                    takePhotoSVG.style.display = "none";
                    imgPreview.style.display = "block";
                    imgPreview.innerHTML = '<img src="' + this.result + '" />';
                });
                setInputValues(inputValues => ({ ...inputValues, image: files }));
            }
        }
    }

    const onAddProductClick = (e) => {
        e.preventDefault();
        console.log(inputValues);
    }


    return (
        <form className="add-product-form" >
            <div className="form-header">
                <CloseButtonPink onClick={onCloseButtonClick} />
            </div>
            <section className="form-content">
                <div className="get-product-image">
                    <input type="file" accept="image/*" id="product-image-input" />
                    <label htmlFor="product-image-input" onClick={attachDisplayImageFunctionality}>
                        <TakePhoto id="take-photo-svg" />
                    </label>
                    <div id="product-image-preview" display='none'></div>
                </div>
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