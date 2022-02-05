

import './SingleChoice.scss';
const SingleChoice = ({
    isSelected
}) => {
    return (
        <div className={`single-choice ${isSelected ? 'choice-selected' : ''}`}>

        </div>
    )
}

export default SingleChoice;