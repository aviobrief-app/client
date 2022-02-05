
import { useState } from 'react';
import SingleChoice from './SingleChoice/SingleChoice';

import './SelectionSlider.scss';
const SelectionSlider = ({
    choicesLabels
}) => {
    const [selectedValue, setSelectedValue] = useState({});


    const publishSelectedValue = (value) => {
        setSelectedValue(() => ({
            [value]: value,
        }));
    };
    return (
        <section className="selection-slider">
            {choicesLabels
                .map(label =>
                    <SingleChoice
                        text={label}
                        publishSelectedValue={publishSelectedValue}
                        isSelected={selectedValue.text}
                    />)}
        </section>
    )
}


export default SelectionSlider;