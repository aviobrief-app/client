
import { useState } from 'react';
import SingleChoice from './SingleChoice/SingleChoice';

import './SelectionSlider.scss';
const SelectionSlider = ({
    choices,
    publishInputValue,
    inputValues
}) => {

    return (
        <section className="selection-slider">
            {choices
                .map(label =>
                    <SingleChoice
                        label={label}
                        publishInputValue={publishInputValue}
                        isSelected={publishInputValue.priority}
                    />)}
        </section>
    )
}


export default SelectionSlider;