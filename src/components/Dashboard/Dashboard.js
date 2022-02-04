import { useModalBackdropContext } from 'contexts/ModalBackdropContext';

import AddProductButton from 'components/AddProductButton/AddProductButton';
import ModalBackdrop from 'components/modals/ModalBackdrop/ModalBackdrop';


import './Dashboard.scss';
const Dashboard = () => {

    const { contextDisplayModal, contextSetDisplayModal } = useModalBackdropContext();

    const onAddProductButtonClick = (e) => {
        e.preventDefault();
        contextSetDisplayModal(true);
    }

    return (
        <section className="dashboard">
            <section className="add-button" onClick={onAddProductButtonClick}>
                <AddProductButton />
            </section>

            {contextDisplayModal && <ModalBackdrop />}
        </section>
    )
}


export default Dashboard;