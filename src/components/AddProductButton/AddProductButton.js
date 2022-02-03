

import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';


import './AddProductButton.scss';
const AddProductButton = () => {
    return (
        <div className="add-product-button">
            <ButtonFilled
                fillColor="#9A2FAE"
                text="Add"
                width="120px"
                height="40px"
                fontSize="inherit"
                fontWeight="500"

            />
        </div>
    )
}

export default AddProductButton;