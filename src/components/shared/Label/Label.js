
import { ReactComponent as LabelQuestionMark } from 'assets/svg/LabelQuestionMark.svg';

import './Label.scss';
const Label = ({
    text,
    hasQuestionLabel
}) => {
    return (
        <div className="label">
            <p className="label-text">
                {text || 'n/a'}
            </p>
            <LabelQuestionMark className="label-question-mark" />
        </div>
    )
}

export default Label;