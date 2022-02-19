
import { useState, useEffect } from 'react';

import { ReactComponent as IncreaseButton } from './assets/IncreaseButton.svg';
import { ReactComponent as DecreaseButton } from './assets/DecreaseButton.svg';


import './QuantityNumericInput.scss';
const QuantityNumericInput = ({
    width,
    height,
    minValue,
    maxValue,
    publishInputValue
}) => {

    const style = {
        width: width,
        height: height,
    }

    const [value, setValue] = useState(1);


    return (
        <section className="quantity-numeric-input" style={style}>
            <input
                className="input-box"
                type="number"
                value={value}
            />
            <div className="buttons">
                <IncreaseButton />
                <DecreaseButton />
            </div>

        </section>
    )
}


export default QuantityNumericInput;