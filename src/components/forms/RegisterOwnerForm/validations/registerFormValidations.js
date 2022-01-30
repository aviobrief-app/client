import * as yup from 'yup';

export const ownerRegisterSchema = yup.object().shape({
    fullName: yup.string().min(3, 'Full name minimum 3 letters!'),
    organization: yup
        .string()
        .min(3, 'Household minimum 3 letters!'),
    email: yup
        .string()
        .email(`Please enter a valid email!`)
        .required(`Please enter a valid email!`),
    password: yup.string().min(6, 'Password minimum 6 characters!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], `Passwords don't match!`)
        .required('Password confirmation is required!'),
});
