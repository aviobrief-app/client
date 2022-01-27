import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ownerRegisterSchema } from './Validations/registerFormValidations';
import { useYupValidation } from 'hooks/useYupValidation';

import InputWithCustomPlaceholder from 'components/shared/InputWithCustomPlaceholder/InputWithCustomPlaceholder';


import './RegisterOwnerForm.scss';
const RegisterOwnerForm = () => {

    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const publishInputValue = (inputName, value) => {
        setInputValues((inputValues) => ({
            ...inputValues,
            [inputName]: value,
        }));
    };

    return (
        <section className="register-owner-form">
            <div className="top-icon"></div>
            <form className="register-form">
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

                <button type="button" className="register-button">

                </button>
            </form>
            <div className="bottom-disclaimer">
                <p className="question"></p>
                <Link to="/" className="login-link">Login here.</Link>
            </div>
        </section>
    )
}

export default RegisterOwnerForm;
