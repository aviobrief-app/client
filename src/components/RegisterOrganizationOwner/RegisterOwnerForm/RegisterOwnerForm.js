import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ownerRegisterSchema } from './Validations/registerFormValidations';
import { useYupValidation } from 'hooks/useYupValidation';

import { ReactComponent as ShoppingBag } from '../assets/Group 4.svg';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';

import * as authService from 'services/authService';


import './RegisterOwnerForm.scss';
const RegisterOwnerForm = () => {

    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const publishInputValue = (inputName, value) => {
        setInputValues((inputValues) => ({
            ...inputValues,
            [inputName]: value,
        }));
    };

    const onFormSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        authService
            .registerOrganizationOwner(inputValues)
            .then((result) => {
                console.log(result);
                setIsSubmitted(true);
            })
            .catch(err => {
                // err.message
                //     ? toaster.toastWarning(err.message)
                //     : err.errors
                //         ? toaster.toastWarning(err.errors[0].msg)
                //         : toaster.toastWarning(toastMessages.USER_REGISTER_FAIL)

                // loadingUX.dimScreenOut();
                console.log(err);
            })
    }

    return (
        <section className="register-owner-form">
            <div className="top-icon">
                <ShoppingBag />
            </div>
            <form className="form">
                <div className='input-container'>
                    <InputWithCustomPlaceholder
                        name="email"
                        placeholder={'email'}
                        publishInputValue={publishInputValue}
                        globalValidationError={errors.email}
                        hasHideIcon={false}
                        isSubmitted={isSubmitted}
                        validations={ownerRegisterSchema}
                    />
                </div>
                <div className='input-container'>
                    <InputWithCustomPlaceholder
                        name="fullName"
                        placeholder={'full name'}
                        publishInputValue={publishInputValue}
                        globalValidationError={errors.fullName}
                        hasHideIcon={false}
                        isSubmitted={isSubmitted}
                        validations={ownerRegisterSchema}
                    />
                </div>
                <div className='input-container'>
                    <InputWithCustomPlaceholder
                        name="organization"
                        placeholder={'household name'}
                        publishInputValue={publishInputValue}
                        globalValidationError={errors.organization}
                        hasHideIcon={false}
                        isSubmitted={isSubmitted}
                        validations={ownerRegisterSchema}
                    />
                </div>
                <div className='input-container'>
                    <InputWithCustomPlaceholder
                        name="password"
                        placeholder={'password'}
                        publishInputValue={publishInputValue}
                        globalValidationError={errors.password}
                        hasHideIcon={true}
                        isSubmitted={isSubmitted}
                        validations={ownerRegisterSchema}
                    />
                </div>
                <div className='input-container'>
                    <InputWithCustomPlaceholder
                        name="confirmPassword"
                        placeholder={'confirm password'}
                        publishInputValue={publishInputValue}
                        globalValidationError={errors.confirmPassword}
                        hasHideIcon={true}
                        isSubmitted={isSubmitted}
                        validations={ownerRegisterSchema}
                        compareWith={{ 'password': inputValues.password }}
                    />
                </div>


                <div type="button" className="register-button-container">
                    <ButtonFilled
                        url=""
                        text="SignUp"
                        fontSize="inherit"
                        onClick={onFormSubmitHandler}
                        disabled={isLoading}
                    />
                </div>
            </form>
            <div className="bottom-disclaimer">
                <p className="question">already registered?</p>
                <Link to="/" className="login-link">Login here.</Link>
            </div>
        </section>
    )
}

export default RegisterOwnerForm;
