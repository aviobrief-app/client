


import './DashboardSeparator.scss';
const DashboardSeparator = ({
    label
}) => {
    return (
        <div className="dashboard-separator">
            <p className="label">
                {label}
            </p>
            <p className="line">

            </p>
        </div>
    )
}

export default DashboardSeparator;