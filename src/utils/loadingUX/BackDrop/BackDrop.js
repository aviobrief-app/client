import ReactDOM from 'react-dom';

import './BackDrop.scss';

import SpinnerBig from '../SpinnerBig/SpinnerBig';

const BackDrop = ({
    dimInOut,
    dimIn,
    dimOut,
}) => {
    return (
        <div className={`loading-ux-dim ${dimInOut ? 'dim-in-out' : ''} ${dimIn ? 'dim-in' : ''} ${dimOut ? 'dim-out' : ''}`} >
            <SpinnerBig />
        </div >
    )

}

export default BackDrop;
