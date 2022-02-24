import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as loadingUX from 'utils/loadingUX/loadingUX';


import DashboardSeparator from 'components/DashboardSeparator/DashboardSeparator';
import DashboardCard from 'components/DashboardCard/DashboardCard';
import ShoppingBagWithItemsCount from 'components/shared/ShoppingBagWithItemsCount/ShoppingBagWithItemsCount';

//temporary svg
import { ReactComponent as MyProducts } from './assets/MyProducts.svg';
import { ReactComponent as Quantities } from './assets/Quantities.svg';
import { ReactComponent as Categories } from './assets/Categories.svg';
import { ReactComponent as BottomMenu } from './assets/BottomMenu.svg';

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
            <DashboardSeparator label={'PRODUCTS'} />
            <div className="card-row">
                <DashboardCard
                    onClick={() => navigate('/profile/purchases')}
                    scale={1.25}
                    label={'PURCHASES'}
                >
                    <ShoppingBagWithItemsCount />
                </DashboardCard >
                <MyProducts />

            </div>
            <DashboardSeparator label={'QUICK FILTER'} />

            <div className="card-row">
                <Quantities />
                <Categories />

            </div>
            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </section>
    )
}


export default Dashboard;