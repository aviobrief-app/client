


import { ReactComponent as TakePhoto } from 'assets/svg/TakePhoto.svg';


import './ProductImageUpload.scss';
const ProductImageUpload = ({
    publishInputValue
}) => {

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
                let dataResult;
                const fileReader = new FileReader();
                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function () {
                    dataResult = this.result;
                    takePhotoSVG.style.display = "none";
                    imgPreview.style.display = "block";
                    imgPreview.innerHTML = '<img src="' + this.result + '" />';
                    publishInputValue('image', dataResult);
                });
            }
        }
    }
    return (
        <div className="add-product-image">
            <input type="file" accept="image/*" id="product-image-input" />
            <label htmlFor="product-image-input" onClick={attachDisplayImageFunctionality}>
                <TakePhoto id="take-photo-svg" />
            </label>
            <div id="product-image-preview" display='none'></div>
        </div>
    )

}

export default ProductImageUpload;