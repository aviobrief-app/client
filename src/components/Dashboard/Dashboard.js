
import { ReactComponent as ThinPlusSign } from 'assets/svg/ThinPlusSign.svg';
import AddProductButton from 'components/AddProductButton/AddProductButton';


import './Dashboard.scss';
const Dashboard = () => {
    return (
        <section className="dashboard">

            <section className="add-button">
                <AddProductButton />
            </section>
        </section>
    )
}


export default Dashboard;