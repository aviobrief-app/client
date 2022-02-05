
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
                        inputValues={inputValues}
                        width={'120px'}
                        height={'40px'}
                    />)}
        </section>
    )
}


export default SelectionSlider;