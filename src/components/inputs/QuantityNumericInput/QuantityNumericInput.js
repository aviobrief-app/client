
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

    useEffect(() => {
        publishInputValue('quantity', value);
    }, [])

    const onIncreaseButtonClick = () => {
        if(value === 20) { return }
        setValue((value) => value + 1);
        publishInputValue('quantity', value + 1);

    }

    const onDecreaseButtonClick = () => {
        if(value === 1) { return }
        setValue((value) => value - 1);
        publishInputValue('quantity', value + 1);

    }


    return (
        <section className="quantity-numeric-input" style={style}>
            <input
                className="input-box"
                type="number"
                value={value}
                readOnly
            />
            <div className="buttons">
                <IncreaseButton className="increase" onClick={onIncreaseButtonClick} />
                <DecreaseButton className="increase" onClick={onDecreaseButtonClick} />
            </div>

        </section>
    )
}


export default QuantityNumericInput;