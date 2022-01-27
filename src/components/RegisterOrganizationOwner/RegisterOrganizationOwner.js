import { Link } from 'react-router-dom'
import './RegisterOrganizationOwner.scss';

const RegisterOrganizationOwner = () => {


    return (
        <section className="register-organization-owner">
            <aside className="graphic">
                graphic
            </aside>
            <section className="register-form">
                <div className="top-icon"></div>
                <form className="register-form"></form>
                <button type="button" className="register-button"></button>
                <div className="bottom-disclaimer">
                    <p className="question"></p>
                    <Link to="/" className="login-link">Login here.</Link>
                </div>

            </section>
        </section>
    )
}

export default RegisterOrganizationOwner;