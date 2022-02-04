import { useState } from 'react';

import AddProductButton from 'components/AddProductButton/AddProductButton';
import ModalBackdrop from 'components/modals/ModalBackdrop/ModalBackdrop';


import './Dashboard.scss';
const Dashboard = () => {

    const [displayModal, setDisplayModal] = useState(false);

    const onAddProductButtonClick = (e) => {
        e.preventDefault();
        setDisplayModal(true);
    }

    return (
        <section className="dashboard">
            <section className="add-button" onClick={onAddProductButtonClick}>
                <AddProductButton />
            </section>

            {displayModal && <ModalBackdrop />}
        </section>
    )
}


export default Dashboard;