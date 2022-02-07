import * as yup from 'yup';

export const addProductFormSchema = yup.object().shape({
    // image: yup
    //     .mixed()
    //     .test("type", "Image type invalid!", (value) => {
    //         return value && (value[0].type === "image/jpeg" || value[0].type === "image/bmp" || value[0].type === "image/png")
    //     }),
    productName: yup
        .string()
        .min(3, `Product name min 3 characters!`),
    priority: yup
        .string()
        .oneOf(["Now", "Later", "Archive"], 'Priority invalid!'),
    exactBrand: yup
        .boolean()
        .oneOf([true, false], 'Exact or Not_Exact required!'),

});
