import { ReactComponent as WomanOnCouch } from 'assets/svg/WomanOnCouch.svg'
import LoginForm from 'components/forms/LoginForm/LoginForm';

import './Login.scss';
const Login = () => {
    return (
        <section className="login">
            <aside className="left-graphics">
                <section className="woman-on-couch-container">
                    <WomanOnCouch className="woman-on-couch" />
                    <a className="credit" href="https://www.freepik.com/vectors/food">
                        <i className="fab fa-creative-commons-by"></i>
                        Food vector created by stories - www.freepik.com
                    </a>
                </section>
            </aside>
            <LoginForm />
            <div className="disclaimer">
                <p className="star">*</p>
                <p className="text">Regarding your shopping list only!</p>
            </div>
        </section>
    )
}

export default Login;