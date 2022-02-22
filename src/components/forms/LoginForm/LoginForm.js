import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as toaster from 'utils/notifyingUX/toaster';
import { toastMessages } from 'utils/notifyingUX/UXmessages';
import * as loadingUX from 'utils/loadingUX/loadingUX';


import { useYupValidation } from 'hooks/useYupValidation';
import { loginFormSchema } from './validations/loginFormSchema';
import * as authService from 'services/authService';
import { useAuth } from 'contexts/AuthContext';

import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import { ReactComponent as ToiletPaper } from 'assets/svg/ToiletPaper.svg';


import './LoginForm.scss';
const LoginForm = () => {

    const navigate = useNavigate();
    const { validateForm } = useYupValidation();
    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const { setCurrentUser, setCurrentUserClaims } = useAuth();

    const publishInputValue = (inputName, value) => {
        setInputValues((inputValues) => ({
            ...inputValues,
            [inputName]: value,
        }));
    };

    const onFormSubmitHandler = async (e) => {
        e.preventDefault();
        loadingUX.dimScreenIn();
        setIsLoading(true);


        validateForm(loginFormSchema, inputValues)
            .then((response) => {
                setErrors({});

                authService
                    .loginJWT(inputValues)
                    .then((loginResponse) => {
                        // setCurrentUser(loginResponse.currentUser);
                        // setCurrentUserClaims(loginResponse.currentUserClaims);
                        sessionStorage.setItem('USER', JSON.stringify(loginResponse.currentUser));
                        sessionStorage.setItem('USER_CLAIMS', JSON.stringify(loginResponse.currentUserClaims));
                        toaster.toastSuccess(toastMessages.LOGIN_OK);
                        setIsSubmitted(true);
                        navigate('/profile/dashboard');
                        // loadingUX.dimScreenOut();
                    })
                    .catch(err => {
                        err.message
                            ? toaster.toastWarning(err.message)
                            : toaster.toastWarning(toastMessages.LOGIN_FAIL);
                        // loadingUX.dimScreenOut();
                        // console.log(err);
                    })
            })
            .catch((errors) => {
                setErrors(errors);
                toaster.toastWarning(toastMessages.MISSING_REQUIRED_FORM_DATA);
                // loadingUX.dimScreenOut();
            });

        setIsLoading(false);
        loadingUX.dimScreenOut();

    }

    return (
        <section className="login-form">
            <div className="top-icon">
                <ToiletPaper className="top-icon-image" />
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
                        validations={loginFormSchema}
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
                        validations={loginFormSchema}
                    />
                </div>
                <section className="links-container">
                    <p className="login-submit" onClick={!isLoading ? onFormSubmitHandler : null}>Login</p>
                    <p className="or">or</p>
                    <Link to="/register-organization-owner" className="signup">Signup</Link>
                    <div className="slogan">
                        <p className="text">for a happier relationship</p>
                        <p className="star">*</p>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default LoginForm;