export const displaySelectedImageHandler = ({
    publishInputValue
}) => {

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