import * as yup from 'yup';

export const ownerRegisterSchema = yup.object().shape({
    fullName: yup.string().min(3, 'Full name should be minimum 3 letters!'),
    companyName: yup
        .string()
        .min(3, 'Company should be minimum 3 letters!'),
    email: yup
        .string()
        .email(`Please enter a valid email!`)
        .required(`Please enter a valid email!`),
    password: yup.string().min(6, 'Password should be minimum 6 characters!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], `Passwords don't match!`)
        .required('Password confirmation is required!'),
});
