
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
                        key={label}
                        publishInputValue={publishInputValue}
                        inputValues={inputValues}
                        width={'85px'}
                        height={'37px'}
                    />)}
        </section>
    )
}


export default SelectionSlider;