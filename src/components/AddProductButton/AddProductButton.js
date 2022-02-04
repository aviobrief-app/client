
import { ReactComponent as ThinPlusSign } from 'assets/svg/ThinPlusSign.svg';


import './AddProductButton.scss';
const AddProductButton = () => {
    return (
        <section className="add-product-button">
            <ThinPlusSign />
            <p className="button-text">Add</p>
        </section>
    )
}

export default AddProductButton;