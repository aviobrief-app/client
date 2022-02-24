
import { ReactComponent as CardBackground } from './assets/CardBackground.svg';

import './DashboardCard.scss';
const DashboardCard = ({
    children,
    onClick,
    scale,
    label,
}) => {
    return (
        <section className="dashboard-card" onClick={onClick}>
            <CardBackground className="card-background" />
            <div className="inner-component-container" style={{ transform: `scale(${scale})` }}>
                {children}
            </div>
            <p className="card-label">
                {label}
            </p>

        </section>
    )
}

export default DashboardCard;