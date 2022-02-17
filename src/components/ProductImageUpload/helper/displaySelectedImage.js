import Compress from 'compress.js';


export const displaySelectedImageHandler = (publishInputValue, setIsImageSelected) => {

    const compress = new Compress();


    const chooseFile = document.getElementById("product-image-input");
    const imgPreview = document.getElementById("product-image-preview");

    chooseFile.addEventListener("change", function (e) {
        const files = [...e.target.files];

        if(files) {
            compress.compress(files, {
                size: 1, // the max size in MB, defaults to 2MB
                quality: .75, // the quality of the image, max is 1,
                maxWidth: 700, // the max width of the output image, defaults to 1920px
                maxHeight: 700, // the max height of the output image, defaults to 1920px
                resize: true, // defaults to true, set false if you do not want to resize the image width and height
                rotate: false, // See the rotation section below

            }).then((data) => {
                // compressed file, base64 string
                const image = data[0];
                const base64str = image.data;
                const imgExt = image.ext;

                // convert to BLOB and set the new file name (to be saved like that in firebase);
                const file = Compress.convertBase64ToFile(base64str, imgExt);
                file.name = data[0].alt;

                // read file to display in circle and publish value in form inputs for server saving
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.addEventListener("load", function () {
                    imgPreview.style.display = "block";
                    imgPreview.innerHTML = '<img src="' + this.result + '" />';
                    setIsImageSelected(true)
                    publishInputValue('image', file);
                });
            })
        }
    });
}