import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
    email: yup
        .string()
        .email(`Please enter a valid email!`)
        .required(`Please enter a valid email!`),
    password: yup.string().required('Please enter password!'),
});
