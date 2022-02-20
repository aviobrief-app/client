import { useState } from 'react';

import { ReactComponent as CheckboxSelected } from './assets/CheckboxSelected.svg';
import { ReactComponent as CheckboxNotSelected } from './assets/CheckboxNotSelected.svg';

import './CheckboxItemCircle.scss';
const CheckboxItemCircle = () => {
    const [checked, setChecked] = useState(false);

    const onCheckboxClickHandler = (e) => {
        setChecked((checked) => !checked);
    };

    return (
        <section className="checkbox-item-circle" onClick={onCheckboxClickHandler}>
            {checked
                ?
                <CheckboxSelected />
                :
                <CheckboxNotSelected />
            }

        </section>
    )
}

export default CheckboxItemCircle;