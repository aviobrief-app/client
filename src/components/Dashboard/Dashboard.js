
import { ReactComponent as ThinPlusSign } from 'assets/svg/ThinPlusSign.svg';
import AddProductButton from 'components/AddProductButton/AddProductButton';
import './Dashboard.scss';
const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="add-button-container">
                <div className="plus-sign">
                    <ThinPlusSign />
                </div>
                <div className="add-button">
                    <AddProductButton />
                </div>
            </div>
        </section>

    )
}


export default Dashboard;