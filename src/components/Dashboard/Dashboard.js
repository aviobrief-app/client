import { useNavigate } from 'react-router-dom';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import AddProductButton from 'components/AddProductButton/AddProductButton';
import ModalBackdrop from 'components/hoc/ModalBackdrop/ModalBackdrop';
import AddProductForm from 'components/forms/AddProductForm/AddProductForm';


import './Dashboard.scss';
const Dashboard = () => {

    const navigate = useNavigate();

    const onAddProductButtonClick = (e) => {
        e.preventDefault();
        navigate('/purchases')
    }

    return (
        <section className="dashboard">
            <section className="add-button" onClick={onAddProductButtonClick}>
                <AddProductButton />
            </section>

        </section>
    )
}


export default Dashboard;