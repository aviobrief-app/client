
import { ReactComponent as LabelQuestionMark } from 'assets/svg/LabelQuestionMark.svg';

import './Label.scss';
const Label = ({
    className,
    text,
    fontSize,
    hasQuestionLabel
}) => {
    const style = {
        ...(fontSize ? { fontSize } : {}),
    }
    return (
        <div className={`label ${className}`}>
            <p className="label-text" style={style}>
                {text || 'n/a'}
            </p>
            <LabelQuestionMark className="label-question-mark" />
        </div>
    )
}

export default Label;