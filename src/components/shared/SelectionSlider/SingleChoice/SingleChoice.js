

import './SingleChoice.scss';
const SingleChoice = ({
    label,
    isSelected,
    publishInputValue,
}) => {
    return (
        <div
            className={`single-choice ${isSelected ? 'choice-selected' : ''}`}
            onClick={() => publishInputValue('priority', label)}
        >
            {label}
        </div>
    )
}

export default SingleChoice;