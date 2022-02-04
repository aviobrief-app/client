
import { ReactComponent as ThinPlusSign } from 'assets/svg/ThinPlusSign.svg';


import './AddProductButton.scss';
const AddProductButton = () => {


    const onAddProductButtonClick = (e) => {
        e.preventDefault();
    }

    return (
        <button type="button" className="add-product-button" onClick={onAddProductButtonClick}>
            <ThinPlusSign />
            <p className="button-text">Add</p>
        </button >
    )
}

export default AddProductButton;