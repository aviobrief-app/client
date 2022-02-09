import { useState } from 'react';

import { ReactComponent as TakePhoto } from 'assets/svg/TakePhoto.svg';
import { ReactComponent as RemoveUploadedImage } from './assets/RemoveUploadedImage.svg';
import { displaySelectedImageHandler } from './helper/displaySelectedImage';


import './ProductImageUpload.scss';
const ProductImageUpload = ({
    publishInputValue
}) => {

    const [isImageSelected, setIsImageSelected] = useState(false);

    const onRemoveUploadedImageClick = () => {
        publishInputValue('image', null);
        setIsImageSelected(false)

        const imgPreview = document.getElementById("product-image-preview");
        imgPreview.innerHTML = '';
        imgPreview.style.display = "none";
    }

    return (
        <div className="add-product-image">
            <input type="file" accept="image/*" id="product-image-input" />

            {!isImageSelected
                ?
                <label
                    htmlFor="product-image-input"
                    onClick={() => displaySelectedImageHandler(publishInputValue, setIsImageSelected)}
                >
                    <TakePhoto id="take-photo-svg" />
                </label>
                :
                <>
                    <RemoveUploadedImage className="remove-uploaded-image" onClick={onRemoveUploadedImageClick} />
                </>
            }

            <div id="product-image-preview" display='none'></div>
        </div>
    )

}

export default ProductImageUpload;