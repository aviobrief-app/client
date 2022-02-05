import * as yup from 'yup';

export const addProductFormSchema = yup.object().shape({
    productName:
        yup
            .string()
            .min(3, `Product name min 3 characters!`),
});
