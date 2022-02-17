
import { ReactComponent as ThinPlusSign } from 'assets/svg/ThinPlusSign.svg';


import './AddProductButton.scss';
const AddProductButton = () => {

    return (
        <button type="button" className="add-product-button" >
            <ThinPlusSign />
            <p className="button-text">Add</p>
        </button >
    )
}

export default AddProductButton;