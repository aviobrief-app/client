import { useState } from 'react';
import { Link } from 'react-router-dom';

import { loginFormSchema } from './validations/loginFormSchema';
import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';
import { ReactComponent as ToiletPaper } from '../assets/ToiletPaper.svg'


import './LoginForm.scss';
const LoginForm = () => {

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
                    <p className="login-submit">Login</p>
                    <p className="or">or</p>
                    <p className="signup">Signup</p>
                </section>
            </form>
        </section>
    )
}

export default LoginForm;