import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useYupValidation } from 'hooks/useYupValidation';

import './InputWithCustomPlaceholder.scss';

const InputWithCustomPlaceholder = ({
    name,
    placeholder,
    publishInputValue,
    globalValidationError,
    hasHideIcon,
    isSubmitted,
    validations,
    compareWith,
    type,
    onChange,
    outValue,
    defaultValue,
    testId,

}) => {
    const { validateInputField } = useYupValidation();
    const [value, setValue] = useState('');
    const [ownValidationError, setOwnValidationError] = useState('');
    const [formValidationError, setFormValidationError] = useState('');

    const [inputClickedByUser, setInputClickedByUser] = useState(false);
    const [seeValue, setSeeValue] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [showInputMessage, setShowInputMessage] = useState(false);
    const location = useLocation();

    useEffect(() => isSubmitted && setValue(''), [isSubmitted]);
    useEffect(() => { value !== '' ? setShowPlaceholder(false) : setShowPlaceholder(true); }, [value]);
    useEffect(() => {
        if(outValue) {
            outValue !== ''
                ? setShowPlaceholder(false)
                : setShowPlaceholder(true);
        }
    }, [outValue]);
    useEffect(() => {
        if(defaultValue) {
            setValue(defaultValue)
        }
    }, [defaultValue])
    useEffect(() => {
        if(publishInputValue) publishInputValue(name, value);
    }, [value]);
    useEffect(() => {
        setFormValidationError(globalValidationError);
    }, [globalValidationError]);

    useEffect(() => {
        // to prevent the error check for the first load, so they don't show errors immediately, but only once selected
        if(!inputClickedByUser && !globalValidationError) {
            return;
        }

        const valuePair = {
            [name]: outValue ? outValue : value,
            ...(compareWith ? compareWith : {}),
        };

        validateInputField(validations, valuePair, name)
            .then((result) => {
                setOwnValidationError('');
                setFormValidationError('');
                setShowInputMessage(true);
            })
            .catch((errors) => {
                setOwnValidationError(errors[name][0]);
                setShowInputMessage(false);
            });

    }, [value, inputClickedByUser, formValidationError, outValue]);

    return (
        <div className="input-and-error-message-container">
            <div className={`input-with-custom-placeholder`}>
                <input
                    className={`input-field  ${ownValidationError ? 'input-field-error' : ''}`}
                    name={name}
                    value={outValue ? outValue : value}
                    onClick={() => setInputClickedByUser(true)}
                    onChange={onChange ? onChange : (e) => setValue(e.target.value)}
                    type={
                        type
                            ? type
                            : hasHideIcon
                                ? seeValue
                                    ? 'text'
                                    : 'password'
                                : 'text'
                    }
                    data-testid={testId}
                />
                <div className="input-decorations-container">
                    {showPlaceholder
                        ?
                        <div className={'input-placeholder'} >
                            <font style={{ color: '#999999' }}>{placeholder}</font>
                            <font style={{ color: '#9A2FAE' }}> *</font>
                        </div>
                        :
                        null
                    }
                </div>
                {hasHideIcon
                    ?
                    <div className="icon-eye" onClick={() => setSeeValue(!seeValue)} >
                        {seeValue ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                    </div>
                    :
                    null
                }

                {showInputMessage ? (
                    <div className="input-ok-message-container">
                        <i className="fas fa-check-circle"></i>
                    </div>
                ) : null}
            </div>
            {ownValidationError !== '' ? (
                <div className="input-error-message-container">
                    {ownValidationError}
                </div>
            ) : null}
        </div>
    );
};

export default InputWithCustomPlaceholder;
