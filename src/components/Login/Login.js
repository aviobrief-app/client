
import { ReactComponent as PinkCarpet } from 'assets/svg/PinkCarpet.svg'
import { ReactComponent as WomanOnCouch } from 'assets/svg/WomanOnCouch.svg'
import { ReactComponent as UbuuyIdea } from 'assets/svg/UbuuyIdea.svg'
import LoginForm from 'components/forms/LoginForm/LoginForm';


import './Login.scss';
const Login = () => {
    return (
        <section className="login">
            <aside className="left-graphics">
                <WomanOnCouch className="woman-on-couch" />
                <PinkCarpet className="pink-carpet" />
                <UbuuyIdea className="ubuuy-idea" />
                <a className="credit" href="https://www.freepik.com/vectors/food">
                    <i className="fab fa-creative-commons-by"></i>
                    Food vector created by stories - www.freepik.com
                </a>
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