


import { ReactComponent as TakePhoto } from 'assets/svg/TakePhoto.svg';
import { displaySelectedImageHandler } from './helper/displaySelectedImage';


import './ProductImageUpload.scss';
const ProductImageUpload = ({
    publishInputValue
}) => {

    return (
        <div className="add-product-image">
            <input type="file" accept="image/*" id="product-image-input" />
            <label
                htmlFor="product-image-input"
                onClick={() => displaySelectedImageHandler(publishInputValue)}
            >
                <TakePhoto id="take-photo-svg" />
            </label>
            <div id="product-image-preview" display='none'></div>
        </div>
    )

}

export default ProductImageUpload;