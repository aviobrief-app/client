import { useState, useEffect } from 'react';

import { ReactComponent as CheckboxSelected } from './assets/CheckboxSelected.svg';
import { ReactComponent as CheckboxNotSelected } from './assets/CheckboxNotSelected.svg';
import './CheckboxItem.scss';

const CheckboxItem = ({
    label,
    publishInputValue,
}) => {

    const [checked, setChecked] = useState(false);

    const onCheckboxClickHandler = (e) => {
        setChecked((checked) => !checked);
    };

    useEffect(() => {
        publishInputValue(label, checked);
    }, [checked]);

    return (
        <div className="checkbox-item-wrapper">
            <div className="icon-container" onClick={onCheckboxClickHandler}>
                {checked
                    ?
                    <CheckboxSelected />
                    :
                    <CheckboxNotSelected />
                }
            </div>
        </div>
    );
};

export default CheckboxItem;

// functionality with saved checkboxes state
// const { filterState, publishCheckboxState } = useContext(FilterContext);
// const [checked, setChecked] = useState(filterState[group][label] || false);
