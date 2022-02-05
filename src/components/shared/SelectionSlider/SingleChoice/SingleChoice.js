import { useEffect, useState } from 'react';

import './SingleChoice.scss';
const SingleChoice = ({
    label,
    publishInputValue,
    inputValues,
    width,
    height,
}) => {

    const [isSelected, setIsSelected] = useState(inputValues.label);

    useEffect(() => {
        setIsSelected(inputValues.priority === label);
    }, [inputValues])

    return (
        <div
            className={`single-choice ${isSelected ? 'choice-selected' : ''}`}
            onClick={() => publishInputValue('priority', label)}
            style={{ width: width, height: height }}
        >
            <p className="choice-text">
                {label}
            </p>
        </div>
    )
}

export default SingleChoice;