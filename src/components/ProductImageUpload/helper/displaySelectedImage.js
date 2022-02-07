export const displaySelectedImageHandler = (publishInputValue, setIsImageSelected) => {

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
                imgPreview.style.display = "block";
                imgPreview.innerHTML = '<img src="' + this.result + '" />';
                setIsImageSelected(true)
                publishInputValue('image', chooseFile.files[0]);
            });
        }
    }
}