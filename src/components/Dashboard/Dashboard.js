import { useNavigate } from 'react-router-dom';

import AddProductButton from 'components/AddProductButton/AddProductButton';

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