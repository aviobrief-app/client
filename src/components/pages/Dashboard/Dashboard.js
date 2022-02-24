import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as loadingUX from 'utils/loadingUX/loadingUX';

import AddProductButton from 'components/AddProductButton/AddProductButton';
import DashboardCard from 'components/DashboardCard/DashboardCard';
import ShoppingBagWithItemsCount from 'components/shared/ShoppingBagWithItemsCount/ShoppingBagWithItemsCount';

import './Dashboard.scss';
const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // navigate('/profile/purchases')
    }, [])

    return (
        <section className="dashboard">
            {/* <section className="add-button" onClick={onAddProductButtonClick}>
                <AddProductButton />
            </section> */}
            <DashboardCard
                onClick={() => navigate('/profile/purchases')}
                scale={1.25}
                label={'PURCHASES'}
            >
                <ShoppingBagWithItemsCount />
            </DashboardCard >
        </section>
    )
}


export default Dashboard;