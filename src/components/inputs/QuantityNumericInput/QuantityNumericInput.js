
import { useState, useEffect } from 'react';




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

            </div>

        </section>
    )
}


export default QuantityNumericInput;